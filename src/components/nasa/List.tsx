// import { Stack } from '@mui/material';
import { Stack } from '@mui/material';
import { client } from './api/client';
import { Card } from './Card';
// import { Card } from './Card';


export function List() {
  const { data, isLoading } = client.getAll.useQuery(
    ['apod'], // <- queryKey
    { query: { api_key: 'DEMO_KEY', count: 20 } }, // <- Query params, Params, Body etc (all typed)
    { staleTime: 1000 } // <- react-query options (optional)
  );

  console.log("NASA API Key", import.meta.env.NASA_API_KEY)


  if (isLoading) return <div>Loading...</div>;

  return (
    <Stack direction="row" gap={2} flexWrap="wrap" sx={{maxWidth: '90vw'}}>
      {data?.body.map((item) => (
        <Card key={item.url} {...item} />
      ))}
    </Stack>
  );
}