import classes from './Stack.module.css';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import {
  FaReact,
  FaAws,
  FaDocker,
  FaVuejs,
  FaLess
} from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import {
  DiDjango,
  DiNodejs,
  DiJava
} from 'react-icons/di';
import {
  SiMongodb,
  SiTailwindcss,
  SiStyledcomponents
} from 'react-icons/si';

function Stack() {
  return (
    <main className={classes.MainContainer}>
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
      <section className={classes.SecondContainer}>
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

      <section className={classes.ThirdContainer}>
        <h1>Other technologies I work with</h1>
        <h3>Here is a list of other tools I am familiar with.</h3>
        <div className={classes.BackendTechnologies}>
          <div className={classes.Box}>
            <span>BACKEND</span>
          </div>
        </div>
      </section>

      <section className={classes.FourthContainer}>
        <div className={classes.ItemIcon}>
          <DiNodejs className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <DiDjango className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <FaDocker className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <DiJava className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <SiMongodb className={classes.Icon} />
        </div>
      </section>

      <section className={classes.FifthContainer}>
        <div className={classes.FrontendTechnologies}>
          <div className={classes.Box}>
            <span>FRONTEND</span>
          </div>
        </div>
      </section>

      <section className={classes.FourthContainer}>
        <div className={classes.ItemIcon}>
          <FaVuejs className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <FaLess className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <SiTailwindcss className={classes.Icon} />
        </div>
        <div className={classes.ItemIcon}>
          <SiStyledcomponents className={classes.Icon} />
        </div>
      </section>
    </main>
  )
}

export default Stack;