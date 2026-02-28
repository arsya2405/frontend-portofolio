import project1 from "../assets/images/switch-project.avif"
import { programmingLanguages } from "../App"
import { frameworks } from "../App";
import { tools } from "../App";

function Projects() {
    interface ProjectItem {
        id: string;
        img: string;
        title: string;
        creator: string;
        techStack: string[];
        descriptions: string[];
        score?: string;
        projectURL: string;
    }

    const projects: ProjectItem[] = [
        {
            id: "switch2",
            img: project1, 
            title: "Nintendo Switch 2 Information Website", 
            creator: "Myself",
            techStack: [programmingLanguages[1]],
            descriptions: [
                "Designed and built a website containing information regarding the Nintendo Switch 2 console.",
                "Utilized HTML to define the structure of the webpage and also CSS to apply visuals and responsiveness on it."
            ],  
            score: "4 / 5 Stars",
            projectURL: "https://drive.google.com/file/d/1YJwzxsHgx22FeknLcAwehWYipO89EQXw/view?usp=drive_link"
        },
        {
            id: "dummy",
            img: project1, 
            title: "dummy card", 
            creator: "Myself",
            techStack: [programmingLanguages[1], frameworks[1], "waduh"], 
            descriptions: [
                "lorem ipsum",
            ], 
            score: "69",
            projectURL: "https://drive.google.com/file/d/1YJwzxsHgx22FeknLcAwehWYipO89EQXw/view?usp=drive_link"
        },
        /*
        {
            id: "",    
            img: "", 
            title: "", 
            creator: "", 
            descriptions: ["",], 
            techStack: ["",], 
            score: "97/100", 
            projectURL: ""
        },
        */
    ]
    
    return (
        <section className="flex flex-col gap-[1rem] w-[100%]">
            <h1>My Projects</h1>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {projects.map((project) => (
                    <div id={project.id} className="card-element flex flex-col">
                        <div className="w-[100%]">
                            <img src={project.img} alt={project.title} className="w-[100%]"/>
                        </div>
                        <div id="project-details" className="flex flex-col gap-[1rem]">
                            <div id="title-and-creator" className="flex flex-col">
                                <h2>{project.title}</h2>
                                <p>Created by {project.creator}</p>
                            </div> 
                            <div id="tech-stack" className="flex flex-wrap gap-[0.5rem]">
                                {project.techStack.map((tech) => (
                                    <div className=
                                    {programmingLanguages.includes(tech) ? "programming-language-pill" : 
                                    frameworks.includes(tech) ? "framework-pill" :
                                    tools.includes(tech) ? "tool-pill" : "generic-pill bg-[#e0e0e0]"}>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <ul id="description" className="list-disc list-inside">
                                {project.descriptions.map((desc) => (
                                    <li>{desc}</li>
                                ))}
                            </ul>
                            <div id="score-and-url" className="flex flex-wrap justify-between">
                                <div id="score">

                                </div>
                                <div id="url-button">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
}

export default Projects