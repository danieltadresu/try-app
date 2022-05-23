import classes from './App.module.css';
import Header from './components/Header';
import Stack from './components/Stack';

function App() {
  return (
    <div className={classes.Body}>
      <Header />
      <main className={classes.Main}>
        <div className={classes.LeftBox}>
          <h1 className={classes.Title}>
            Hey, I am <span className={classes.Markdown}>Daniel</span>
            <br/>Full-stack web and mobile developer, from Chile
          </h1>
        </div>
        <div className={classes.RightBox}>
          <h3 className={classes.SubTitle}>
            I am passionate about development
            — <span className={classes.SubMarkdown}>I love automating things</span>,
            <span className={classes.SubMarkdown}> modern technologies</span> and
            <span className={classes.SubMarkdown}> good developer experiencie</span>.
          </h3>
          <h3 className={classes.SubTitle}>
            I am a perfectionist. I pay attention to details,
            because I love when things look good and professionnal.
            I am also <span className={classes.SubMarkdown}>self-taught</span>,
            and I never stop learning.
          </h3>
        </div>
      </main>
      <Stack />
    </div>
  );
}

export default App;
