import classes from './NavigationItems.module.css'
function NavigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <main className={classes.Container}>
        <li className={classes.FirstItem}>
          GitHub
        </li>
        <li className={classes.SecondItem}>
          Mail
        </li>
        <li className={classes.ThirdItem}>
          Projects
        </li>
      </main>
    </ul>
  )
}

export default NavigationItems;