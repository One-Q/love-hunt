import { TextField, Button } from '@material-ui/core'
import { useState } from 'react';

const Question = ({ error, setError, onSend }) => {
  const [value, setValue] = useState('');
  return (
    <form
      className="center-h"
      onSubmit={(e) => {
        e.preventDefault();
        onSend(value);
      }}>
      <TextField label="Entre ta réponse" value={value} helperText={error ? 'Réessaye' : ''} error={error} onFocus={() => { setError(false) }} onChange={(e) => setValue(e.target.value)} />
      <Button color="primary" variant="contained" style={{ marginTop: 40 }} type="submit">Envoyer</Button>
    </form>
  )
}

export default Question;