import useState from "react";
import styles from "./todolist.module.css";

const ToDoList = ({ todoItems }) => {
  return (
    <div className={styles.todolist}>
      <ul>
        <li>test1</li>
        <li>test2</li>
      </ul>
    </div>
  );
};

export default ToDoList;

