import Project from "./Project"

const Projects = () => {
    const projects = [
        {
            name: "project1",
            description: "A project description",
            ghlink: "https://github.com/"
        },
    ]
    return (
        <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
            {projects.map((item, key) => (
                <div key={key}>
                    <Project name={item.name} description={item.description} ghlink={item.ghlink} />
                </div>
            ))}            
        </div>
    )

}

export default Projects