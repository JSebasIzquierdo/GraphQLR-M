import logo from './logo.svg';
import './App.css';
import RouteDescription from './components/Routes/RouteDescription';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './components/api/api';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <RouteDescription />
      </ApolloProvider>
    </div>
  );
}

export default App;
