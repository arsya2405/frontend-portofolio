import { programmingLanguages } from "../variables/skills";
import { frameworks } from "../variables/skills";
import { tools } from "../variables/skills";
import { softSkills } from "../variables/skills";

function AboutMe () {
    return (
        <article id="about-and-skills" className="flex flex-col gap-5 items-center lg:items-start md:gap-10 lg:flex-row">
            <div id="about-me-edu-certif" className="flex-1 flex flex-col gap-4 card-element">
                <div id="about-me" className="flex-1 flex flex-col gap-4">
                    <h1 className="underline">About Me</h1>
                    <ul className="list-disc list-inside">
                        <li>Keen to pursue a career in Information Technology (IT) with a focus on front-end web developer roles.</li>
                        <li>Has experience in developing a stylized and responsive informative website, to which an evaluator gave a positive score of 4 / 5 stars.</li>
                        <li>Has mastered hard skills such as HTML, CSS, TypeScript, React, Tailwind CSS, and GitHub for web development.</li>
                    </ul>
                </div>
                <div id="edu-certif" className="flex flex-col gap-4 justify-between md:flex-row">
                    <div id="edu" className="flex flex-col gap-4">
                        <h1 className="underline">Education</h1>
                        <div className="flex flex-col">
                            <p><strong>Bachelor’s Degree in Computer Science:</strong></p>
                            <ul className="list-disc list-inside">
                                <li>Cakrawala University, 2024 - Present</li>
                            </ul>
                        </div>
                    </div>
                    <div id="certifications" className="flex flex-col gap-4">
                        <h1 className="underline">Certifications</h1>
                        <ul className="list-disc list-inside">
                            <li><a href="https://cert.efset.org/en/q2bBQB" target="_blank" rel="noopener noreferrer" className="link-text">EF SET English Certificate 60/100 (B2 Upper Intermediate)</a></li>
                            <li><a href="https://www.dicoding.com/certificates/72ZDK98KVPYW" target="_blank" rel="noopener noreferrer" className="link-text">Belajar Dasar Pemrograman Web</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="skills" className="flex-1 flex flex-col gap-4 card-element">
                <div id="hard-skills" className="flex flex-col gap-4">
                    <h1 className="underline">Hard Skills</h1>
                    <div id="hard-skill-groups" className="flex flex-col gap-2">
                        <div id="programming-languages" className="flex flex-col">
                            <h2>Programming Languages:</h2>
                            <div className="flex gap-2 flex-wrap">
                                {programmingLanguages.map((lang) => (
                                    <div className=" programming-language-pill">{lang}</div>
                                ))}
                            </div>
                        </div>
                        <div id="frameworks-or-libraries" className="flex flex-col">
                            <h2>Frameworks / Libraries:</h2>
                            <div className="flex gap-2 flex-wrap">
                                {frameworks.map((framework) => (
                                    <div className="framework-pill">{framework}</div>
                                ))}
                            </div>
                        </div>
                        <div id="tools" className="flex flex-col">
                            <h2>Tools:</h2>
                            <div className="flex gap-2 flex-wrap">
                                {tools.map((tool) => (
                                    <div className="tool-pill">{tool}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="soft-skills" className="flex flex-col gap-4">
                    <h1 className="underline">Soft Skills</h1>
                    <div className="flex gap-2 flex-wrap">
                        {softSkills.map((softSkill) => (
                            <div className="soft-skill-pill">{softSkill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AboutMe