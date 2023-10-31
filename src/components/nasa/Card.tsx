import { Box, Typography } from "@mui/material";
import { TDoc } from "./api/contract";

interface Props extends TDoc {}

export function Card({
  url,
  title,
  date,
  explanation,
}: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="button" sx={{fontSize: "1.2rem"}}>{title}</Typography>
      <img
        width={600}
        src={url}
      />
      <Typography variant="caption" sx={{fontSize: "0.8rem"}}>{date}</Typography>
      <Typography variant="caption" sx={{fontSize: "0.8rem"}}>{explanation}</Typography>
    </Box>

  );
}