import ToDoList from "./ToDoList";
import styles from "./todolist.module.css";
import { useState } from "react";

const InputArea = () => {
  return (
    <div className={styles.inputAreaContainer}>
      <form className={styles.inputAreaForm}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="to do list content..." />
        <button className={styles.inputAreaButton}>Add</button>
      </form>
    </div>
  );
};

export default InputArea;
