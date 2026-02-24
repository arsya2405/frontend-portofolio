function Projects() {
    interface ProjectItem {
        img: string;
        title: string;
        creator: string;
        description: string;
        techStack: string[];
        score?: string;
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <h1>Projects</h1>
        </section>
    );
}

export default Projects