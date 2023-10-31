import { Stack } from '@mui/material';
import { client } from '../../api/client';
import { PokemonCard } from './PokemonCard';


export function PokemonList() {
  const { data, isLoading } = client.getAll.useQuery(
    ['pokemon'], // <- queryKey
    { query: { limit: 20 } }, // <- Query params, Params, Body etc (all typed)
    { staleTime: 1000 } // <- react-query options (optional)
  );



  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack direction="row" gap={2} flexWrap="wrap" sx={{maxWidth: '90vw'}}>
      {data?.body?.results.map((item) => (
        <PokemonCard key={item.name} name={item.name} url={item.url} />
      ))}
    </Stack>
  );
}