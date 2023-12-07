import Section from "@/components/section";
import Title from "@/components/title";
import styles from "@/styles/sections/hero.module.scss";

const Hero = () => {
  return (
    <Section className={styles.hero}>
      {/* <div className={styles["hero_content"]}> */}
        <Title>Roundnet</Title>
        <Title type="h3">Masters</Title>
        <Title type="h4">Costa Rica</Title>
        <div className={styles["hero_cta"]}>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Unirse
          </a>
        </div>
      {/* </div> */}
    </Section>
  );
}
 
export default Hero;