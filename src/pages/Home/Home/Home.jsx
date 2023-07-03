import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import AboutMe from "../aboutMe/aboutMe";

const Home = () => {
    return (
        <div>
          <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;