import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';

const HomePage = ({ onStart }) => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, y: 100 }}
    transition={{ ease: 'easeInOut' }}
    className="homepage">
    <h2>Jeu de piste</h2>
    <h3>Règles du jeu : </h3>
    <p>Tu vas recevoir des énigmes qui vont t'emmener à un lieu.</p>
    <p>Sur ce lieu tu devras ouvrir grand tes yeux et trouver une feuille de papier avec un code du genre <b>F25TE3</b></p>
    <p>Ensuite tu l'introduis dans le champ et tu cliques sur Envoyer</p>
    <p><i>Si jamais tu ne trouves pas le papier envoies moi un message avec l'étape à laquelle tu es</i></p>
    <div className="center-h">
      <Button color="primary" variant="contained" onClick={onStart}>Commencer</Button>
    </div>
  </motion.div>
)

export default HomePage;