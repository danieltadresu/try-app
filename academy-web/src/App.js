import classes from './App.module.css';

function App() {
  return (
    <div className={classes.Body}>
      <header className={classes.Header}>
        Header
      </header>
      <main className={classes.Main}>
        <div className={classes.Box}>
          <h1 className={classes.Title}>
            Hey, I am <span className={classes.Markdown}>Daniel</span>
            <br/>Full-stack web and mobile developer, from Chile
          </h1>
        </div>
        <div className={classes.Box}>
          <h3 className={classes.SubTitle}>
            I am passionate about development
            — I love automating things, modern technologies and good developer experiencie.
          </h3>
          <h3 className={classes.SubTitle}>
            I am a perfectionist. I pay attention to details,
            because I love when things look good and professionnal.
            I am also self-taught, and I never stop learning.
          </h3>
        </div>
      </main>
    </div>
  );
}

export default App;
