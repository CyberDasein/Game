import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({isEndGame, restartGame}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

 

  const handleClose = () => {
    setOpen(false);
    restartGame()
  };

  useEffect(() => {
    if(isEndGame) {
        setOpen(true);
      }
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Вы проиграли...</h2>
            <p id="transition-modal-description">Начинаем новую игру + 10$ на счёт!</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
