// styles
import classes from './PublicLayout.module.css';

// components
import Header from './components/Header/index.js'
import Home from './components/Home/index.js';

const PublicLayout = ({ withHeader }) => (
  <div className={classes.Body}>
    {withHeader && <Header />}
    <Home />
  </div>
);

export default PublicLayout;