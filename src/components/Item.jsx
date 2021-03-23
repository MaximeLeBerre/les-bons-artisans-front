import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { useEffect } from "react";



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: deepOrange,
    },
  },
});

export default function Item({id, name, type, price, rating, warranty_years, available }) {
  const classes = useStyles();

  const deleteObject = () => {
    axios.delete(`http://localhost:3000/api/object/${id}`)
    
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Type :{type}</p>
            <p>Price :{price}</p>
            <p>Rating :{rating}</p>
            <p>Warranty Years :{warranty_years}</p>
            <p>Is available :{available ? <Badge color="primary" variant="dot"></Badge> : <Badge color="secondary" variant="dot"></Badge>}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/details/${id}`}>
          <Button size="small" color="primary">
            Modifier
          </Button>
        </Link>
        <Button size="small" color="secondary" onClick={deleteObject}  >
          Supprimer
        </Button>
      </CardActions>
    </Card>
  );
}