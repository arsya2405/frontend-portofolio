import Hero from "../components/HeroComponent";

function Home() {
    return (
        <div className="flex flex-col gap-[20px]">
            <article>
                <Hero />
            </article>
            <article>
                <Hero />
            </article>
        </div>
    );
}

export default Home