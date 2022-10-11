import SiteBranding from "../components/site-branding/site-branding.components";
import About from "../components/about/about.components";
import { ProjectsContextProvider } from "../context/project.context";
import Portfolio from "../components/portfolio/portfolio.components";
const Index = () => {
    return (
        <ProjectsContextProvider>
            <div className="home-container">
                <SiteBranding />
                <About />
                <Portfolio />
            </div>
        </ProjectsContextProvider>
    );
};



export default Index;