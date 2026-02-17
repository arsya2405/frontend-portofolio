function Hero() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[2rem]">Hello There!</h1>
            <p>I'm <span className="font-bold">Muhammad Arsya Nurafi</span>, a Computer Science Student & Front-End Developer.</p>
            <div className="button-parent w-[10rem] h-[2rem]"> {/* size increases 1/4 */}
                <div className="primary-button">
                    <a href="mailto:arsyanurafi2405@gmail.com" target="_blank" rel="noopener noreferrer"> {/* originally 8 and 2*/}
                        <strong>Contact Me</strong>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero