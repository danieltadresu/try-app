import classes from './NavigationItems.module.css'
function NavigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <main className={classes.Container}>
        <li className={classes.Items}>
          GitHub
        </li>
        <li className={classes.Items}>
          Mail
        </li>
        <li className={classes.Items}>
          Projects
        </li>
      </main>
    </ul>
  )
}

export default NavigationItems;