import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export default function SideBar() {
  return (
    <div className={styles.nav}>
        <Logo />
        <AppNav />
        <p> List of cities</p>
        
        <footer className={styles.footer}>
            <p className={styles.copyright}>&Copy; Copyright {new Date().getFullYear()} by HeedWorld</p>
        </footer>
    </div>
  )
}
