import linkedinIcon from '../assets/images/linkedin-logo.avif'

function Hero() {
    return (
        <div className="flex flex-col items-center gap-[0.5rem]">
            <h1 className="text-[2rem]">Hello There!</h1>
            <p>I'm <span className="font-bold">Muhammad Arsya Nurafi</span>, a Computer Science Student & Front-End Developer.</p>
            <div className="button-parent w-[10rem] h-[2rem]">
                <div className="primary-button">
                    <a href="mailto:arsyanurafi2405@gmail.com" target="_blank" rel="noopener noreferrer">
                        <strong>Contact Me</strong>
                    </a>
                </div>
            </div>
            <div className="button-parent w-[10rem] h-[2rem]">
                <div className="secondary-button">
                    <img src={linkedinIcon} alt="LinkedIn Icon" className="button-icon"/>
                    <a href="https://www.linkedin.com/in/muhammad-arsya-nurafi" target="_blank" rel="noopener noreferrer">
                        My LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero