import project1 from "../assets/images/switch-project.avif"
import { programmingLanguages } from "../App"
import { frameworks } from "../App";
import { tools } from "../App";
import scoreIcon from "../assets/images/Plain_Yellow_Star.avif";

function Projects() {
    interface ProjectItem {
        id: string;
        img: string;
        title: string;
        creator: string;
        techStack: string[];
        descriptions: string[];
        score?: string;
        projectURL?: string;
        urlLabel?: string;
        date: string;
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
            score: "4 / 5",
            projectURL: "https://drive.google.com/file/d/1YJwzxsHgx22FeknLcAwehWYipO89EQXw/view?usp=drive_link",
            urlLabel: "HTML and CSS Folder",
            date: "29 - 30 August 2025"
        },
        {
            id: "dummy",
            img: scoreIcon, 
            title: "dummy card", 
            creator: "Myself",
            techStack: [programmingLanguages[1], frameworks[1], "waduh"], 
            descriptions: [
                "lorem ipsum",
            ], 
            score: "69",
            projectURL: "https://drive.google.com/file/d/1YJwzxsHgx22FeknLcAwehWYipO89EQXw/view?usp=drive_link",
            urlLabel: "label",
            date: ""
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
            projectURL: "",
            urlLabel: "",
            date: ""
        },
        */
    ]
    
    return (
        <section className="flex flex-col gap-4 w-full">
            <h1>My Projects</h1>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {projects.map((project) => (
                    <div id={project.id} className="p-10 rounded-4xl border shadow-[0_5px_5px_#808080] flex flex-col gap-4">
                        <div className="aspect-video overflow-hidden">
                            <img src={project.img} alt={project.title} className="object-cover h-full w-full rounded-4xl border"/>
                        </div>
                        <div id="project-details" className="flex flex-col gap-4 items-start">
                            <div className="flex flex-col w-full">
                                <div id="title-score" className="flex flex-wrap justify-between items-center">
                                    <h2>{project.title}</h2>
                                    <div className="flex gap-1">
                                        <img src={scoreIcon} alt="Score Icon" className="h-6"/>
                                        <p><strong>{project.score}</strong></p>
                                    </div>
                                </div>
                                <div id="creator-date-url" className="flex flex-wrap gap-2">
                                    <p>Created by <strong>{project.creator}</strong></p>
                                    <span>|</span>
                                    <p><strong>{project.date}</strong></p>
                                    <span>|</span>
                                    <a href={project.projectURL} target="_blank" rel="noopener noreferrer" className="link-text">{project.urlLabel}</a>
                                </div>
                            </div> 
                            <div id="tech-stack" className="flex flex-wrap gap-2">
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
                            <div id="read-more-or-less" className="flex justify-center w-full">
                                <div className="primary-button w-30 flex justify-center">
                                    <strong>↑ Read Less</strong>
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