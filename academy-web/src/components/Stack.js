import classes from './Stack.module.css';
import { IoLogoNodejs } from 'react-icons/io';

function Stack() {
  return (
    <main className={classes.Box}>
      <div className={classes.Top}>
        <h1>Stack</h1>
      </div>
      <div className={classes.Bottom}>
        <h2>
          Everyone has a favorite stack. Here's mine.
        </h2>
      </div>

      {/* TECH ICONS */}
      <section>
        {/* <IoLogoNodejs
          style={{
            'fontSize': '2rem',
            'background': 'red',
          }}
        /> */}
      </section>
    </main>
  )
}

export default Stack;