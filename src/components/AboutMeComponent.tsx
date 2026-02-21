function AboutMe () {
    return (
        <article className="flex gap-[0.5rem]">
            <div id="about-me" className="flex-1 flex flex-col gap-[1rem]">
                <h1 className="underline">About Me</h1>
                <ul className="list-disc list-inside">
                    <li>Possess strong web and game development skills with fluency in English.</li>
                    <li>Keen to pursue a career in Information Technology (IT) with a focus on front-end web developer roles.</li>
                </ul>
            </div>
            <div id="skills" className="flex-1 flex flex-col gap-[1rem]">
                <div id="hard-skills" className="flex flex-col gap-[1rem]">
                    <h1 className="underline">Hard Skills</h1>
                    <div id="hard-skill-groups" className="flex flex-col gap-[0.5rem]">
                        <div id="programming-languages" className="flex flex-col">
                            <h2>Programming Languages:</h2>
                            <div className="flex gap-[0.5rem]">
                                <div className="pill-element bg-blue-100 text-blue-800">insert skill</div>
                            </div>
                        </div>
                        <div id="frameworks-or-libraries" className="flex flex-col">
                            <h2>Frameworks / Libraries:</h2>
                            <div className="flex gap-[0.5rem]">
                                <div className="pill-element bg-teal-100 text-teal-800">insert skill</div>
                            </div>
                        </div>
                        <div id="tools" className="flex flex-col">
                            <h2>Tools:</h2>
                            <div className="flex gap-[0.5rem]">
                                <div className="pill-element bg-indigo-100 text-indigo-800">insert skill</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="soft-skills" className="flex flex-col gap-[1rem]">
                    <h1 className="underline">Soft Skills</h1>
                    <div className="flex gap-[0.5rem]">
                        <div className="pill-element bg-amber-100 text-amber-800">insert skill</div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AboutMe