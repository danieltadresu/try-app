// styles
import classes from './PublicLayout.module.css';

// components
import Header from './components/Header/index.js'

const PublicLayout = ({ withHeader }) => (
  <div className={classes.Body}>
    {withHeader && <Header />}
  </div>
);

export default PublicLayout;