import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';

import './App.css';
import HomePage from './components/Homepage';
import Questions from './components/Questions';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7579ff',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(null);
  const hasAlreadyStarted = localStorage.getItem('hasAlreadyStarted');
  const lastStep = localStorage.getItem('lastStep');

  useEffect(() => {
    console.log(hasAlreadyStarted)
    if (hasAlreadyStarted) setStarted(JSON.parse(hasAlreadyStarted));
  }, [hasAlreadyStarted]);

  useEffect(() => {
    if (lastStep >= 0) setStep(parseInt(lastStep));
  }, [lastStep])


  const onStart = () => {
    localStorage.setItem('hasAlreadyStarted', true);
    localStorage.setItem('lastStep', 0);
    setStep(0);
    setStarted(true);
  }

  const goToNextStep = () => {
    setStep(step + 1);
    localStorage.setItem('lastStep', step + 1);
  }

  const reset = () => {
    localStorage.setItem('hasAlreadyStarted', false);
    localStorage.setItem('lastStep', null);
    setStep(null);
    setStarted(false);
  }

  console.log({ step, started })

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container">
          <div className="titleContainer">
            <h1>Joyeuse Saint-Valentin mon p'tit ange !!</h1>
          </div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, ease: 'easeInOut' }}
            className="panel">
            <AnimatePresence exitBeforeEnter>
              {!started && <HomePage onStart={onStart} />}
              {started && <Questions step={step} goToNextStep={goToNextStep} reset={reset} />}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
