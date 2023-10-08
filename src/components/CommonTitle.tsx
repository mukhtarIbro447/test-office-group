import Typography from '@mui/material/Typography';

const CommonTitle = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={600} sx={{ textAlign: 'left' }}>
        White Color factory
      </Typography>
      <Typography fontWeight={700} style={{ fontStyle: 'italic', textAlign: 'left' }}>
        Shoreditch
      </Typography>
    </>
  );
};

export default CommonTitle;
