import { Metadata } from "next"
import Project from "./Project"
import githubFetchRepoInformation from "./ghUtils";

export const metadata: Metadata = {
    title: 'rISE - Projects',
}

interface ProjectData {
    owner: string;
    repo: string;
    description?: string;
}

async function getProjects() {
    const projectsList: ProjectData[] = [
        {
            owner: "themohitnair",
            repo: "skyblog",
        },
        {
            owner: "themohitnair",
            repo: "sfnx"
        },
        {
            owner: "themohitnair",
            repo: "distrowiz"
        }
    ];

    const projectPromises = projectsList.map(async (project) => {
        const info = await githubFetchRepoInformation(project.owner, project.repo);
        return info ? {
            name: info.name,
            description: project.description || info.description,
            ghlink: info.url,
            languages: info.languages,
            stars: info.stars
        } : null;
    })

    const projects = await Promise.all(projectPromises);
    return projects.filter((project): project is NonNullable<typeof project> => project !== null).sort((a, b) => (b.stars - a.stars))
}

const ProjectsPage = async () => {
    const projects = await getProjects();

    return (
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            {projects.map((item, key) => (
                <Project 
                    key={key}
                    name={item.name}
                    description={item.description}
                    ghlink={item.ghlink}
                    languages={item.languages}
                    stars={item.stars}
                />
            ))}
        </div>
    )
}

export default ProjectsPage