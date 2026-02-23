import Hero from "../components/HeroComponent";
import AboutMe from "../components/AboutMeComponent";

function Home() {
    return (
        <section className="flex flex-col flex-1 justify-between">
            <Hero />
            <AboutMe />
        </section>
    );
}

export default Home