import { Box, Typography } from "@mui/material";
import { client } from "../api/client";

interface Props {
  name: string;
  url: string;
}

export function PokemonCard({ name, url }: Props) {
  const id = url.split('/').slice(-2)[0];

  const query = client.getSingle.useQuery(
    ['pokemon', id],
    { params: { id: id as string } },
    { staleTime: Infinity }
  );

  const pokemon = query.data?.status === 200 ? query.data.body : null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="button" sx={{fontSize: "1.2rem"}}>{name}</Typography>
      <img
        height={200}
        width={200}
        style={{ imageRendering: 'pixelated' }}
        src={pokemon?.sprites?.front_default}
      />
    </Box>

  );
}