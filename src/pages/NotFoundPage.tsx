import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <div className="h-full w-full flex flex-col items-center gap-4">
            <h1 className="text-[#a0a0a0]">404 - Page Not Found :(</h1>
            <div className="primary-button w-35 h-10 flex justify-center items-center">
                <NavLink to="/"><strong>Return to Home</strong></NavLink>
            </div>
        </div>
    );
}

export default NotFound