export interface Course {
    id: string;
    title: string;
    credits: {
        theory: number;
        tutorial: number;
        practical: number;
    };
    semester: number;
    options?: string[];
}

export const courses: Course[] = [
    {
        id: "AECP17/27",
        title: "A Scientific Approach to Health",
        credits: {
            theory: 1,
            tutorial: 0,
            practical: 0
        },
        semester: 1
    },
    {
        id: "PPC18",
        title: "Principles of Programming Using C",
        credits: {
            theory: 2,
            tutorial: 0,
            practical: 1
        },
        semester: 1
    },

    {
        id: "AECC17/27",
        title: "Design Thinking",
        credits: {
            theory: 2,
            tutorial: 0,
            practical: 0
        },
        semester: 2
    },

    {
        id: "IS31",
        title: "Laplace Transforms & Vector Space",
        credits: {
            theory: 2,
            tutorial: 1,
            practical: 0
        },
        semester: 3
    },
    {
        id: "IS32",
        title: "Digital Systems and Computer Organization",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 1
        },
        semester: 3
    },
    {
        id: "IS33",
        title: "Data Structures",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 3
    },
    {
        id: "IS34",
        title: "Operating Systems",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 3
    },
    {
        id: "IS35",
        title: "Discrete Mathematical Structures",
        credits: {
            theory: 2,
            tutorial: 1,
            practical: 0
        },
        semester: 3
    },
    {
        id: "ISL36",
        title: "Data Structures Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 3
    },
    {
        id: "ISL37",
        title: "UNIX System Programming Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 3
    },
    {
        id: "UHV38",
        title: "Universal Human Values",
        credits: {
            theory: 2,
            tutorial: 0,
            practical: 0
        },
        semester: 3
    },
    {
        id: "ISAEC39X",
        title: "Ability Enhancement Course - III",
        credits: {
            theory: 1,
            tutorial: 0,
            practical: 0
        },
        semester: 3,
        options: [
            "Capacity Planning in IT",
            "Numerical Analysis with Python",
            "Green IT and Sustainability"
        ]
    },

    {
        id: "IS41",
        title: "Statistics, Probability and Linear Programming",
        credits: {
            theory: 2,
            tutorial: 1,
            practical: 0
        },
        semester: 4
    },
    {
        id: "IS42",
        title: "Microcontrollers",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 1
        },
        semester: 4
    },
    {
        id: "IS43",
        title: "Design and Analysis of Algorithms",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 4
    },
    {
        id: "IS44",
        title: "Database Management Systems",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 4
    },
    {
        id: "IS45",
        title: "Advanced Java",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 4
    },
    {
        id: "ISL46",
        title: "Design and Analysis of Algorithms Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 4
    },
    {
        id: "ISL47",
        title: "Database Management Systems Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 4
    },
    {
        id: "ISL48",
        title: "Advanced Java Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 4
    },
    {
        id: "ISAEC49X",
        title: "Ability Enhancement Course - IV",
        credits: {
            theory: 1,
            tutorial: 0,
            practical: 0
        },
        semester: 4,
        options: [
            "UI/UX",
            "Cyber Forensics",
            "JavaScript and JQuery"
        ]
    },

    {
        id: "IS51",
        title: "Software Engineering",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 5,
    },
    {
        id: "IS52",
        title: "Artificial Intelligence",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 5,
    },
    {
        id: "IS53",
        title: "Computer Networks",
        credits: {
            theory: 4,
            tutorial: 0,
            practical: 0
        },
        semester: 5,
    },
    {
        id: "IS54",
        title: "Theory of Computation",
        credits: {
            theory: 2,
            tutorial: 1,
            practical: 0
        },
        semester: 5,
    },
    {
        id: "ISE55x",
        title: "Programming Elective Course - I",
        credits: {
            theory: 4,
            tutorial: 0,
            practical: 0
        },
        semester: 5,
        options: [
            "Operations Research",
            "Computer Vision",
            "Distributed Systems",
            "Mobile Application Development - I",
            "Software Design Patterns"
        ]
    },
    {
        id: "ISL56",
        title: "Data Visualization Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 5
    },
    {
        id: "ISL57",
        title: "Software Design Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 5
    },
    {
        id: "AL58",
        title: "Research Methodology and Intellectual Property Rights",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 5
    },
    {
        id: "ISAEC59X",
        title: "Ability Enhancement Course - V",
        credits: {
            theory: 1,
            tutorial: 0,
            practical: 0
        },
        semester: 5,
        options: [
            "Responsive Web Development with Bootstrap",
            "NoSQL Databases",
            "Programming in Scala"
        ]
    },

    {
        id: "AL61",
        title: "Management & Entrepreneurship",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0,
        },
        semester: 6,
    },
    {
        id: "IS62",
        title: "Machine Learning",
        credits: {
            theory: 3,
            tutorial: 1,
            practical: 0,
        },
        semester: 6,
    },
    {
        id: "ISE63x",
        title: "Program Elective Course - II",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0,
        },
        semester: 6,
        options: [
            "Mobile Application Development - II",
            "Internet of Things",
            "Blockchain Essentials and DApps",
            "System Simulation and Modeling",
        ],
    },
    {
        id: "ISE64x",
        title: "Program Elective Course - III",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0,
        },
        semester: 6,
        options: [
            "Business Analytics",
            "Natural Language Processing",
            "Cloud Computing",
            "Data Engineering and MLOps",
        ],
    },
    {
        id: "ISL65",
        title: "Machine Learning Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1,
        },
        semester: 6,
    },
    {
        id: "ISL66",
        title: "DevOps Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1,
        },
        semester: 6,
    },
    {
        id: "ISP67",
        title: "Mini Project",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 4,
        },
        semester: 6,
    },

    {
        id: "IS71",
        title: "Distributed Computing",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 1
        },
        semester: 7
    },
    {
        id: "IS72",
        title: "Information Security",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 7
    },
    {
        id: "IS73x",
        title: "Program Elective Course - IV",
        credits: {
            theory: 3,
            tutorial: 0,
            practical: 0
        },
        semester: 7,
        options: [
            "Deep Learning",
            "Predictive Analysis",
            "Statistical Machine Learning",
            "Software Testing"
        ]
    },
    {
        id: "ISL74",
        title: "Data Visualization Lab Using PySpark and Tableau",
        credits: {
            theory: 0,
            tutorial: 1,
            practical: 2
        },
        semester: 7
    },
    {
        id: "ISL75",
        title: "Big Data Lab",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 1
        },
        semester: 7
    },

    {
        id: "ISP81",
        title: "Project Work",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 12
        },
        semester: 8
    },
    {
        id: "INT82",
        title: "Research/Industrial Internship",
        credits: {
            theory: 0,
            tutorial: 0,
            practical: 5
        },
        semester: 8
    },
];