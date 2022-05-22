import classes from './NavigationItems.module.css'
function NavigationItems() {
  return (
    <ul className={classes.NavigationItems}>
      <main className={classes.Container}>
        <li>
          Li 1
        </li>
        <li>
          Li 2
        </li>
      </main>
    </ul>
  )
}

export default NavigationItems;