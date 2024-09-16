import style from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";

/**
 * Layout component serves as a wrapper for common layout elements.
 * It includes a header with navigation and a logo, and a main area
 * for rendering nested routes.
 */
const Layout = () => (
  <>
    {/* Header with Logo and Navigation */}
    <header className={style.header}>
      <Logo />
      <Navigation />
    </header>

    {/* Main content area rendered by nested routes */}
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
