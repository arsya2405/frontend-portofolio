import Hero from "../components/HeroComponent";
import AboutMe from "../components/AboutMeComponent";

function Home() {
    return (
        <section className="flex flex-col flex-1 gap-10">
            <Hero />
            <AboutMe />
        </section>
    );
}

export default Home