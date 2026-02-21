import Hero from "../components/HeroComponent";

function Home() {
    return (
        <section className="flex flex-col gap-[20px]">
            <article>
                <Hero />
            </article>
            <article>
                <Hero />
            </article>
        </section>
    );
}

export default Home