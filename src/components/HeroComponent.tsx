function Hero() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[2rem]">Hello There!</h1>
            <p>I'm <span className="font-bold">Muhammad Arsya Nurafi</span>, a Computer Science Student & Front-End Developer.</p>
            <div className="flex justify-center items-center px-10 py-2.5"> {/* size increases 1/4 */}
                <a href="mailto:arsyanurafi2405@gmail.com" target="_blank" rel="noopener noreferrer" className="primary-button px-8 py-2"> {/* originally 8 and 2*/}
                    <strong>Contact Me</strong>
                </a>
            </div>
        </div>
    );
}

export default Hero