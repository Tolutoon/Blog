import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvbWFuJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="" className={styles.img} fill={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
