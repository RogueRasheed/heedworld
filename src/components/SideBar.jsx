import { Outlet } from "react-router";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
        <Logo />
        <AppNav />

        <Outlet />

        <footer className={styles.footer}>
            <p className={styles.copyright}>&Copy; Copyright {new Date().getFullYear()} by HeedWorld</p>
        </footer>
    </div>
  )
}
