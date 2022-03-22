import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        perferendis eligendi in ipsum similique numquam voluptas fugiat velit,
        quas atque, impedit placeat laudantium ut temporibus est excepturi
        doloremque aut. Pariatur.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
};

export default About;
