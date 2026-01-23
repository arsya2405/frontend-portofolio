import { useEffect } from 'react';
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import AboutMe from './pages/AboutMePage';
import Projects from './pages/ProjectsPage';

const HeaderComponent = () => {
  return (
    <div className="bg-sky-700 flex">
      <p className="p-5">Header</p>
    </div>
  );
}

const FooterComponent = () => {
  return (
    <div className="bg-sky-700 flex">
      <p className="p-5">Footer</p>
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
