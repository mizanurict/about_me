import Header from "../Header/Header";
import Skills from "../Skills/Skills";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Skills></Skills>
        </div>
        
    );
};

export default Home;