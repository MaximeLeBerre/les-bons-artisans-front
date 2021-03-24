import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

export default function ButtonAdd() {
  const classes = useStyles();
  return (
    <>
      <Link to="/form/post" className={classes.root} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          AJOUTER
        </Button>
      </Link>
    </>
  );
}
