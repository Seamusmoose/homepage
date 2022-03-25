import Link from "next/link";
import { useDebugValue } from "react/cjs/react.production.min";
import Weather from "../weather/Weather";
import styles from "./navbar.module.css";

const links = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "quotes", path: "/quotes" },
];

const NavBar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Weather />
      <ul>
        {links.map((value) => {
          return (
            <li key={value.id}>
              <Link href={value.path}>
                <a>{value.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
