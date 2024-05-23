import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { CountryList } from './screens';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gqlAppRoutes } from './router/routes';
import { StateList } from './screens/listStates';


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  [
    {
      path: gqlAppRoutes.countries,
      element : <CountryList />
    },
    {
      path: gqlAppRoutes.states,
      element : <StateList />
    },
    {
      path: '/',
      element : <CountryList />
    }
  ]
)

function App() {
  return (
      <ApolloProvider client={client}>
        <RouterProvider router = {router}></RouterProvider>
      </ApolloProvider>
  );
}

export default App;
