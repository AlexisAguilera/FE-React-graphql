import Box from '@mui/material/Box';
import { styled, Theme } from '@mui/material/styles';

const InnerHeader = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

export function Header() {
  return (
    <InnerHeader component="header">
      <img
        width="150"
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
    </InnerHeader>
  );
}
