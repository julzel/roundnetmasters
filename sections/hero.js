import Section from "@/components/section";
import Title from "@/components/title";
import Button from "@/components/button";
import styles from "@/styles/sections/hero.module.scss";

const Hero = () => {
  return (
    <Section id="home" className={styles.hero}>
      {/* <div className={styles["hero_content"]}> */}
      <Title>Roundnet</Title>
      <Title type="h3">Masters</Title>
      <Title type="h4">Costa Rica</Title>
      <div className={styles["hero_cta"]}>
        <Button variant="primary" type="link">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Unirse
          </a>
        </Button>
      </div>
      {/* </div> */}
    </Section>
  );
};

export default Hero;
