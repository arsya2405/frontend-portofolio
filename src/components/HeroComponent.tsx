import linkedinIcon from '../assets/images/linkedin-logo.avif'

function Hero() {
    return (
        <article id="hero" className="flex flex-col items-center gap-2">
            <p className='text-[3rem] text-center'>Hello There!</p>
            <p className="text-center">I'm <strong>Muhammad Arsya Nurafi</strong>, a Computer Science Student & Aspiring Front-End Developer based in South Jakarta, Indonesia.</p>
            <div className="primary-button w-30 h-7 flex justify-center items-center">
                <a href="mailto:arsyanurafi2405@gmail.com" target="_blank" rel="noopener noreferrer"><strong>Contact Me</strong></a>
            </div>
            <div className="secondary-button flex gap-1 w-30 h-7 justify-center items-center">
                <img src={linkedinIcon} alt="LinkedIn Icon" className="h-4"/>
                <a href="https://www.linkedin.com/in/muhammad-arsya-nurafi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </article>
    );
}

export default Hero