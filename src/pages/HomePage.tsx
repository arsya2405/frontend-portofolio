import Hero from "../components/HeroComponent";
import AboutMe from "../components/AboutMeComponent";

function Home() {
    return (
        <section className="flex flex-col gap-[20px]">
            <Hero />
            <AboutMe />
        </section>
    );
}

export default Home