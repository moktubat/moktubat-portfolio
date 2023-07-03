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
        </div>
    );
};

export default Home;