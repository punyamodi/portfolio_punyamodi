import React from 'react';
import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from './Sections/about.jsx';
import Projects from './Sections/projects.jsx';
import Footer from './Sections/footer.jsx';
import Experience from './Sections/experience.jsx';
import Experience2 from "./D2/project_3D_developer_portfolio/src/components/experience.jsx";
import Contacts from "./D2/project_3D_developer_portfolio/src/components/Contact.jsx";
import Tech from "./Sections/tech.jsx";

const App =  () =>{
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Experience2/>
            <Contacts/>
            <Footer/>
        </main>
    )
}
export default App