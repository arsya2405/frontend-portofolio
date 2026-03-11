import project1 from "../assets/images/switch-project.avif"
import project2 from "../assets/images/blotting-blob-screenshot.avif"
import scoreIcon from "../assets/images/Plain_Yellow_Star.avif";
import { programmingLanguages } from "../App"
import { frameworks } from "../App";
import { tools } from "../App";
import { useState } from "react";

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
            id: "blottingblob",
            img: project2, 
            title: "Blotting Blob First-Person Game", 
            creator: "a Course Project Group",
            techStack: [tools[2], programmingLanguages[2], tools[0]],
            descriptions: [
                "Developed a first-person game prototype using the Unity Engine and C#, starting from concept to playable product.",
                "Utilized the Unity Editor to design the game levels, C# to write scripts, and GitHub to create a repository for team collaboration, version control, and code management.",
            ], 
            score: "97 / 100",
            projectURL: "https://polytato.itch.io/uas-vr001-kelompok1",
            urlLabel: "itch.io",
            date: "June - July 2025"
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
                {projects.map((project) => {
                    const [isExpanded, setIsExpanded] = useState(false);

                    const expandOrShorten = () => {
                        setIsExpanded(!isExpanded);
                    };

                   return (
                    <div id="short-card" className="p-5 rounded-4xl border shadow-[0_5px_5px_#808080] flex flex-col gap-4 relative">
                        <div className="aspect-video overflow-hidden">
                            <img src={project.img} alt={project.title} className="object-cover h-full w-full rounded-4xl border"/>
                        </div>
                        <div id="project-details" className="flex flex-col gap-2 items-start">
                            <div className="flex flex-col w-full">
                                <div id="title-score" className="flex flex-wrap justify-between items-center">
                                    <h2>{project.title}</h2>
                                    <div className="flex gap-1">
                                        <img src={scoreIcon} alt="Score Icon" className="h-6"/>
                                        <p><strong>{project.score}</strong></p>
                                    </div>
                                </div>
                            </div> 
                            {isExpanded ? 
                                <div className="flex flex-col gap-4 items-start">
                                    <div id="creator-date-url" className="flex flex-wrap gap-2">
                                        <p>Created by <strong>{project.creator}</strong></p>
                                        <span>|</span>
                                        <p><strong>{project.date}</strong></p>
                                        <span>|</span>
                                        <a href={project.projectURL} target="_blank" rel="noopener noreferrer" className="link-text">{project.urlLabel}</a>
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
                                </div>
                                :
                                <div className="absolute"></div>
                            }
                            <div id="read-more-or-less" className="flex justify-center w-full">
                                <button onClick={expandOrShorten} className="primary-button w-30 flex justify-center">
                                    <strong>{isExpanded ? "↑ Read Less" : "↓ Read More"}</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                   );
                })}
            </article>
        </section>
    );
}

export default Projects