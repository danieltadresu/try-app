import classes from './Logo.module.css';
import brand from '../assets/images/brand.png';
function Logo() {
  return (
    <div
      className={classes.Logo}
      style={{
        height: '100px' // TO DO: Make dynamic height value getting it as a prop.
      }}
    >
      <img
        src={brand}
        alt='Logo'
      />
    </div>
  )
}

export default Logo;