import React from 'react';
import { FindSpecificCharacter } from '../api/api';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Card,
  Typography,
  Paper,
  CardMedia,
  CardActionArea,
  CardContent,
  ListItem,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 600,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_container: {
    width: 500,
    display: 'flex',
    flex: 'wrap',
  },
  media: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
  },
});

const CharacterDescription = () => {
  const classes = useStyles();
  let { id } = useParams();
  const { loading, error, data } = useQuery(FindSpecificCharacter, {
    variables: { id },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p> Error:</p>;
  return Object.keys(data).map((key, i) => (
    <Container className={classes.root} key={i}>
      <Card className={classes.card_container}>
        <CardActionArea>
          <CardMedia
            image={data.character.image}
            className={classes.media}
          ></CardMedia>
          <CardContent>
            <Typography>Nombre: {data.character.name}</Typography>
            <Typography>Tipo: {data.character.type}</Typography>
            <Typography>Género: {data.character.gender}</Typography>
            <Typography>Estado: {data.character.status}</Typography>
            <Typography>Ubicación: {data.character.location.name}</Typography>
            <Typography>
              Dimensión: {data.character.location.dimension}
            </Typography>
            <Typography>
              Primera Aparición: {data.character.episode[0].air_date}{' '}
            </Typography>
            <Typography>Episodio: {data.character.episode[0].name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  ));
};

export default CharacterDescription;
