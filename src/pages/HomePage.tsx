import Hero from "../components/HeroComponent";
import AboutMe from "../components/AboutMeComponent";

function Home() {
    return (
        <section className="flex flex-col flex-1 gap-[5rem]">
            <Hero />
            <AboutMe />
        </section>
    );
}

export default Home