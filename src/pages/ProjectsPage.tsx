function Projects() {
    interface ProjectItem {
        img: string;
        title: string;
        creator: string;
        description: string[];
        techStack: string[];
        score?: string;
        projectURL: string;
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
                <img src="" alt="" id="project-image" className=""/>
                <div id="project-details" className="flex flex-col">

                </div>
            </div>
        </section>
    );
}

export default Projects