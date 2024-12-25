export interface Channel {
    name: string;
    url: string;
    subjects: string[];
    semesters: number[];
}

export const youtubeChannels: Channel[] = [
    {
        name: "Gajendra Purohit",
        url: "https://www.youtube.com/@gajendrapurohit",
        subjects: ["Mathematics"],
        semesters: [1, 2, 3, 4]
    },
    {
        name: "Bhagwan Singh Vishwakarma",
        url: "https://www.youtube.com/@BhagwanSinghVishwakarma",
        subjects: ["Mathematics"],
        semesters: [1, 2, 3, 4]
    },
    {
        name: "Neso Academy",
        url: "https://www.youtube.com/@nesoacademy",
        subjects: ["Database Management Systems", "Digital Systems and Computer Organization", "Operating Systems", "Computer Networks"],
        semesters: [3, 4, 5]
    },
    {
        name: "Gate Smashers",
        url: "https://www.youtube.com/@GateSmashers",
        subjects: ["Database Management Systems", "Digital Systems and Computer Organization", "Operating Systems", "Computer Networks", "Data Structures", "Design and Analysis of Algorithms"],
        semesters: [3, 4, 5]
    },
    {
        name: "Jenny's Lectures",
        url: "https://www.youtube.com/@JennyslecturesCSIT",
        subjects: ["Database Management Systems", "Digital Systems and Computer Organization", "Operating Systems", "Computer Networks", "Data Structures", "Design and Analysis of Algorithms"],
        semesters: [3, 4, 5]
    },
    {
        name: "Tikle's Academy",
        url: "https://www.youtube.com/@TIKLESACADEMY/",
        subjects: ["Computer Aided Engineering Drawing"],
        semesters: [2]
    },
    {
        name: "Tikle's Academy of Maths",
        url: "https://www.youtube.com/@TIKLESACADEMYOFMATHS",
        subjects: ["Mathematics"],
        semesters: [1, 2, 3, 4]
    },
    {
        name: "Michael Sambol",
        url: "https://www.youtube.com/@MichaelSambol",
        subjects: ["Design and Analysis of Algorithms"],
        semesters: [4]
    }
];

export const allSemesters = Array.from(new Set(youtubeChannels.flatMap(channel => channel.semesters))).sort((a, b) => a - b);