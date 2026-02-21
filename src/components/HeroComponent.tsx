import linkedinIcon from '../assets/images/linkedin-logo.avif'

function Hero() {
    return (
        <article className="flex flex-col items-center gap-[0.5rem]">
            <p className='text-[3rem]'>Hello There!</p>
            <p>I'm <strong>Muhammad Arsya Nurafi</strong>, a Computer Science Student & Aspiring Front-End Developer based in South Jakarta, Indonesia.</p>
            <div className="primary-button w-[10rem] h-[2rem]">
                <a href="mailto:arsyanurafi2405@gmail.com" target="_blank" rel="noopener noreferrer"><strong>Contact Me</strong></a>
            </div>
            <div className="secondary-button w-[10rem] h-[2rem]">
                <img src={linkedinIcon} alt="LinkedIn Icon" className="button-icon"/>
                <a href="https://www.linkedin.com/in/muhammad-arsya-nurafi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </article>
    );
}

export default Hero