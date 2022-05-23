import classes from './Stack.module.css';
import { SiExpress, SiPostgresql } from 'react-icons/si';
import { FaReact, FaAws } from 'react-icons/fa';

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
        <div className={classes.RightIconBox}>
          <SiExpress className={classes.Icon} />
          <div className={classes.ItemBox}>
            <section>
              <h1 className={classes.Title}>
                EXPRESS
              </h1>
            </section>
            <section>
              <span className={classes.Description}>
                Express es una infraestructura de aplicaciones web
                Node.js mínima y flexible que proporciona un conjunto
                sólido de características para las aplicaciones web
                y móviles.
              </span>
            </section>
          </div>
        </div>
        <div className={classes.LeftIconBox}>
          <FaReact className={classes.Icon} />
          <div className={classes.ItemBox}>
            <section>
              <h1 className={classes.Title}>
                REACT
              </h1>
            </section>
            <section>
              <span className={classes.Description}>
                Una biblioteca de JavaScript para
                construir interfaces de usuario. React
                puede también renderizar desde el servidor
                usando Node, así como potencializar aplicaciones
                móviles usando React Native.
              </span>
            </section>
          </div>
        </div>
      </section>

      <section className={classes.IconsContainer}>
        <div className={classes.RightIconBox}>
          <SiPostgresql className={classes.Icon} />
          <div className={classes.ItemBox}>
            <section>
              <h1 className={classes.Title}>
                POSTGRESQL
              </h1>
            </section>
            <section>
              <span className={classes.Description}>
                Express es una infraestructura de aplicaciones web
                Node.js mínima y flexible que proporciona un conjunto
                sólido de características para las aplicaciones web
                y móviles.
              </span>
            </section>
          </div>
        </div>
        <div className={classes.LeftIconBox}>
          <FaAws className={classes.Icon} />
          <div className={classes.ItemBox}>
            <section>
              <h1 className={classes.Title}>
                AWS
              </h1>
            </section>
            <section>
              <span className={classes.Description}>
                Una biblioteca de JavaScript para
                construir interfaces de usuario. React
                puede también renderizar desde el servidor
                usando Node, así como potencializar aplicaciones
                móviles usando React Native.
              </span>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Stack;