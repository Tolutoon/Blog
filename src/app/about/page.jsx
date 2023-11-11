import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1647529735400-d4b2caec8906?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis id
            alias dicta suscipit temporibus voluptate est fugiat dolorem facilis
            dignissimos dolores vel, esse iste vitae blanditiis. Aut,
            consequuntur. Error, magni. Doloribus veniam magnam expedita
            delectus! Ad obcaecati tempora necessitatibus quibusdam tenetur
            blanditiis voluptas vitae libero quo quaerat! Aliquid soluta sit a
            fugit sequi quisquam modi. Necessitatibus voluptatibus accusamus qui
            unde. Cupiditate corporis error placeat repellendus! <br />
            Ab, ea? Ea assumenda nobis placeat minus temporibus facilis error
            impedit nemo praesentium nesciunt necessitatibus, tempore officiis
            dolore, mollitia quos debitis velit doloremque laborum est! Ad
            ratione vel esse fugiat animi officia saepe possimus nesciunt
            facilis numquam hic commodi, consequatur facere tempora quia.
            Nostrum quos eligendi sint voluptas cupiditate labore tempora
            sapiente quia quam esse. Quisquam corrupti eum veniam inventore
            deserunt illum officiis voluptatem, quaerat dolorem sunt praesentium
            magnam aliquid laboriosam vel neque facere eius, odio ullam aperiam
            dolor necessitatibus harum minus? Eos, ex facilis?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          eligendi eius aliquam quod voluptatem, quia praesentium distinctio
          maiores! Repellendus et officiis, expedita quam assumenda qui tenetur
          eius pariatur atque magni. Voluptatibus, aut. Neque libero, harum fuga
          ullam at, nisi necessitatibus, voluptas nam optio explicabo iure vero
          laborum! 
        </p>
        <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  );
};

export default About;
