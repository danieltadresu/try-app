import classes from './Stack.module.css';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';

function Stack() {
  return (
    <main className={classes.Box}>
      <section>
        <div className={classes.Top}>
          <h1>Stack</h1>
        </div>
        <div className={classes.Bottom}>
          <h2>
            Everyone has a favorite stack. Here's mine.
          </h2>
        </div>
      </section>

      {/* TECH ICONS */}
      <section className={classes.IconsContainer}>
        <div className={classes.ItemIcon}>
          <AiFillHtml5 className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <DiCss3 className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <FaReact className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <SiExpress className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <SiPostgresql className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <FaAws className={classes.Icon} />
        </div>
      </section>
    </main>
  )
}

export default Stack;