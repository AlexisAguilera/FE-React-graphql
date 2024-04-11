import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.primary.main,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
