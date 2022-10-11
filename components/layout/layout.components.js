import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import Navigation from "../navigation/navigation.component";
import SocialSidebar from "../social-sidebar/social-sidebar.components";

const Layout = ({ children }) => {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`site-container ${theme}`}>
                <Navigation />
                {children}
            </div>
            <SocialSidebar className="social-fixed-left"/>
        </>
    );
};

export default Layout;


