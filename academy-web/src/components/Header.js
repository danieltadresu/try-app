import classes from './Header.module.css';
import Logo from './Logo.js';
import NavigationItems from './NavigationItems';
function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.BrandContainer}>
        <Logo />
      </div>
      <nav className={classes.IconsContainer}>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default Header;
