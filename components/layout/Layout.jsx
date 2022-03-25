import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import styles from './layout.module.css'

const Layout = ({children}) => {
  return (
      <div className={styles.layoutContainer}>
          <NavBar />
          <main>{children}</main>
          <Footer />
      </div>
  )
};

export default Layout;
