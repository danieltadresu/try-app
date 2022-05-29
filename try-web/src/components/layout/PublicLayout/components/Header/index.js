// styles
import classes from './Header.module.css';

// components
import Logo from '../Logo/index.js';
import NavigationItems from '../NavigationItems/index.js';

const Header = () => (
  <header className={classes.Header}>
    <div className={classes.BrandContainer}>
      <Logo />
    </div>
    <nav className={classes.IconsContainer}>
      <NavigationItems />
    </nav>
  </header>
);

export default Header;
