import React from 'react';
import { FindCharacters } from '../api/api';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Container,
  Card,
  Typography,
  Paper,
  CardMedia,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 10,
    display: 'inline-block',
  },
  card_container: {
    width: 300,
    display: 'flex',
    flex: 'wrap',
  },
  media: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
});

const CharacterCard = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(FindCharacters);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p> Error:</p>;
  return data.characters.results.map(({ id, name, status, image }) => (
    <Link to={`/character/id/${id}`}>
      <Container className={classes.root}>
        <Card className={classes.card_container}>
          <CardActionArea>
            <CardMedia image={image} className={classes.media}></CardMedia>
            <CardContent>
              <Typography className="label_container">{name}</Typography>
              <Typography className="stauts_container">{status}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Link>
  ));
};

export default CharacterCard;
