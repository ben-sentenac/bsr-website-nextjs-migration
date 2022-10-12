import SiteBranding from "../components/site-branding/site-branding.components";
import About from "../components/about/about.components";
import { ProjectsContextProvider } from "../context/project.context";
import Portfolio from "../components/portfolio/portfolio.components";
import { Prices } from "../components/prestations/prestations.components";
const Index = () => {
    return (
        <ProjectsContextProvider>
            <div className="home-container">
                <SiteBranding />
                <About />
                <Portfolio />
                <Prices />
            </div>
        </ProjectsContextProvider>
    );
};



export default Index;