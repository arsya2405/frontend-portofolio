import { useEffect } from 'react';
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AboutMe from './pages/AboutMePage';
import Projects from './pages/ProjectsPage';

interface NavigationItem {
  to: string;
  label: string;
  icon?: string;
}

const navigationItems: NavigationItem[] = [
  { to: '/', label: 'About Me'},
  { to: '/projects', label: 'Projects'}
];

const HeaderComponent = () => {
  return (
    <div className="bg-blue-800 p-5">
      <nav>
        <ul className="flex gap-5 justify-center">
          {navigationItems.map((item) => (
            <li className="rounded-xl p-2 text-white 
            hover:bg-blue-950 hover:text-shadow-[0_0_5px] 
            hover:text-shadow-white">
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const FooterComponent = () => {
  return (
    <div className="bg-blue-800 flex p-5 justify-center">
      <p className="text-white">&copy; 2026 Muhammad Arsya Nurafi. All rights reserved.</p>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky">
        <HeaderComponent />
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

// Nested routing configuration
function App() {
  useEffect(() => {
    document.title = "Personal Portfolio"
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />}/>
        <Route path="projects" element={<Projects />}/>
      </Route>
    </Routes>
  );
}

export default App
