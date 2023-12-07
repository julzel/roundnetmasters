import Page from "@/components/page";
import FullPageScroll from "@/components/fullPageScroll";

import styles from "../styles/pages/home.module.scss";
import Hero from "@/sections/hero";
import Roundnet from "@/sections/roundnet";
import Store from "@/sections/store";
import About from "@/sections/about";
import Contact from "@/sections/contact";

const Home = () => {
  return (
    <Page>
      <FullPageScroll>
        <Hero />
        <Roundnet />
        <Store />
        <About />
        <Contact />
      </FullPageScroll>
    </Page>
  );
};

export default Home;
