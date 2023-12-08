import { useState } from "react";

import Page from "@/components/page";
import Header from "@/components/header";
import FullPageScroll from "@/components/fullPageScroll";
import SocialMedia from "@/components/social-media";

import Hero from "@/sections/hero";
import Roundnet from "@/sections/roundnet";
import Store from "@/sections/store";
import About from "@/sections/about";
import Contact from "@/sections/contact";

const Home = () => {
  const [section, setSection] = useState(0);
  const handleSectionChange = (newSection) => setSection(newSection);

  return (
    <Page>
      <Header onSectionChange={handleSectionChange} section={section} />
      <FullPageScroll onSectionChange={handleSectionChange} section={section}>
        <Hero />
        <Roundnet />
        <Store />
        <About />
        <Contact />
      </FullPageScroll>
      <SocialMedia />
    </Page>
  );
};

export default Home;
