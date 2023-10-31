import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'swagger-ui-react/swagger-ui.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ViteStarterIcons } from './components/vite/ViteStarterIcons';
import { Swagger } from './components/pokemon/api/Swagger';
import { Box } from '@mui/material';
// import { PokemonList } from './components/pokemon/PokemonList';

// Create a client
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Box width={"100vw"}>

        <ViteStarterIcons />

        {/* <PokemonList /> */}
        <Swagger />

      </Box>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App