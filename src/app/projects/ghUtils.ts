import * as yaml from 'js-yaml';

interface RepoInfo {
    owner: string;
    name: string;
    description: string;
    stars: number;
    url: string;
    languages: {
        name: string;
        percentage: number;
        color: string;
    }[];
}

interface LanguageData {
    [key: string]: {
        color?: string;
        type?: string;
        aliases?: string[];
        extensions?: string[];
        interpreters?: string[];
        filenames?: string[];
    };
}

async function fetchLanguageColors(): Promise<Record<string, string>> {
    try {
        const response = await fetch('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml');
        if (!response.ok) {
        throw new Error('Failed to fetch language colors');
        }
        const text = await response.text();
        const languageData = yaml.load(text) as LanguageData;
        const colorMap: Record<string, string> = {};
        
        for (const [language, data] of Object.entries(languageData)) {
        if (data.color) {
            colorMap[language] = data.color;
        }
        }
        return colorMap;
    } catch (error) {
        console.error('Error fetching language colors:', error);
        return {};
    }
}

let languageColors: Record<string, string> = {};

const githubFetchRepoInformation = async (owner: string, reponame: string): Promise<RepoInfo | null> => {
    if (Object.keys(languageColors).length === 0) {
        languageColors = await fetchLanguageColors();
    }

    const repoUrl = `https://api.github.com/repos/${owner}/${reponame}`;
    const languagesUrl = `https://api.github.com/repos/${owner}/${reponame}/languages`;

    try {
        const repoResponse = await fetch(repoUrl, {
        headers: {
            'Authorization': `token ${process.env.GITHUB_API_KEY}`
        }
        });
        if (!repoResponse.ok) {
        throw new Error('Failed to fetch repository information');
        }
        
        interface RepoData {
        name: string;
        description: string | null;
        stargazers_count: number;
        html_url: string;
        owner: {
            login: string;
        };
        }
        
        const repoData = await repoResponse.json() as RepoData;

        const languagesResponse = await fetch(languagesUrl, {
        headers: {
            'Authorization': `token ${process.env.GITHUB_API_KEY}`
        }
        });
        if (!languagesResponse.ok) {
        throw new Error('Failed to fetch language information');
        }
        
        const languagesData = await languagesResponse.json() as Record<string, number>;
        
        const totalBytes = Object.values(languagesData).reduce((a, b) => a + b, 0);
        
        const processedLanguages = Object.entries(languagesData)
        .map(([name, bytes]) => ({
            name,
            percentage: Number(((bytes / totalBytes) * 100).toFixed(1)),
            color: languageColors[name] || '#858585'
        }))
        .sort((a, b) => b.percentage - a.percentage);

        return {
        owner: repoData.owner.login,
        name: repoData.name,
        description: repoData.description || '',
        stars: repoData.stargazers_count,
        url: repoData.html_url,
        languages: processedLanguages
        };
    } catch (error) {
        console.error('Error fetching repository information:', error);
        return null;
    }
};

export default githubFetchRepoInformation;