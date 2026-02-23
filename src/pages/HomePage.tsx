import Hero from "../components/HeroComponent";
import AboutMe from "../components/AboutMeComponent";

function Home() {
    return (
        <section className="flex flex-col gap-[20px] flex-1">
            <Hero />
            <AboutMe />
        </section>
    );
}

export default Home