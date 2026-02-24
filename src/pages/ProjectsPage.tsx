import project1 from "../assets/images/switch-project.avif"

function Projects() {
    interface ProjectItem {
        id: string;
        img: string;
        title: string;
        creator: string;
        description: string[];
        techStack: string[];
        score?: string;
        projectURL: string;
    }

    const projects: ProjectItem[] = [
        {
            id: "switch2",
            img: project1, 
            title: "Nintendo Switch 2 Information Website", 
            creator: "Myself",
            description: [
                "Designed and built a website containing information regarding the Nintendo Switch 2 console.",
                "Utilized HTML to define the structure of the webpage and also CSS to apply visuals and responsiveness on it."
            ], 
            techStack: ["HTML", "CSS"], 
            score: "4 / 5 Stars",
            projectURL: "https://drive.google.com/file/d/1YJwzxsHgx22FeknLcAwehWYipO89EQXw/view?usp=drive_link"
        },
        /*
        {
            id: "",    
            img: "", 
            title: "", 
            creator: "", 
            description: ["",], 
            techStack: ["",], 
            score: "97/100", 
            projectURL: ""
        },
        */
    ]
    
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
                <div id={project.id} className="flex flex-col">
                    <img src={project.img} alt={project.title} className=""/>
                    <div id="project-details" className="flex flex-col">
                        <h1>{project.title}</h1>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Projects