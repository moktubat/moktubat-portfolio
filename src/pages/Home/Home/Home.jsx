import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import AboutMe from "../aboutMe/aboutMe";

const Home = () => {
    return (
        <div>
          <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default Home;