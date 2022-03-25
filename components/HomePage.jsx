import Image from "next/image";
import Head from "next/head";
import InputArea from "./to-do-list/inputArea";
import ToDoList from "./to-do-list/ToDoList";
import styles from "../styles/homepage.module.css";
import { useState } from "react";
import NavBar from "./navbar/NavBar";

const HomePage = () => {
  return (
    <div>
      <InputArea />
      <ToDoList />
    </div>
  );
};

export default HomePage;
