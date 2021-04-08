import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterDescription from '../characterDescription/CharacterDescription';
import CharacterCard from './../characterCard/CharacterCard';

const RoutesPoke = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharacterCard} />
        <Route path="/character/id/:id" component={CharacterDescription} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesPoke;
