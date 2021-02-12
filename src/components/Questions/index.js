import { useState } from 'react';
import { motion } from 'framer-motion';
import sha1 from 'sha1';
import { Button } from '@material-ui/core'

import { data } from '../../data';
import Question from './Question';

const Questions = ({ step, goToNextStep, reset }) => {
  const [error, setError] = useState(false);

  const onSend = (value) => {
    if (sha1(value) === data.questions[step].answer) {
      setError(false);
      goToNextStep();
    }
    else setError(true);
  }

  console.log({ step })

  return (
    <div>
      {step !== data.questions.length - 1 && (<p>Etape {step + 1}/{data.questions.length - 1}</p>)}
      {data.questions.map((question, index) => {
        if (index === step) return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ ease: 'easeInOut' }}
            key={question.question}
          >
            <h3>{question.question}</h3>
            {!!question.answer && (
              <Question {...{ error, onSend, setError }} />
            )}
          </motion.div>)
        return null
      }
      )}
      {step === data.questions.length - 1 && (<div className="center-h">
        <Button color="primary" variant="contained" style={{ marginTop: 40 }} onClick={reset}>Recommencer</Button>
      </div>
      )}
    </div>
  )
};

export default Questions;