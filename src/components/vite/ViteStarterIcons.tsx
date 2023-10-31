import { Box } from '@mui/material';
import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'


export function ViteStarterIcons() {
  return (
    <>
      <Box my={4}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Box>
    </>
  );
}