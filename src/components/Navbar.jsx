import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const clearStorage = () => {
    localStorage.clear();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Les Bons Artisans
            </Link>
          </Typography>
          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
            <Button style={{ color: '#fafafa' }} onClick={clearStorage}>Connection/ Déconnection</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
