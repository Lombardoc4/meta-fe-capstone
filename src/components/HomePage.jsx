

import { Reviews } from "./Reviews";
import { Specials } from "./Specials";
import { About } from "./About";
import Hero from "./Hero"
import Nav from "./Nav";

const HomePage = () => {

    return (
        <>
            <Hero />
            <Specials />
            <Reviews />
            <About />
        </>
    );
}

export default HomePage;