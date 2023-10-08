import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { styled } from '@mui/material/styles';
import CommonLinks from './CommonLinks';
import CommonTitle from './CommonTitle';

const StyledLinkButton = styled(Button)({
  color: '#000',
  textDecoration: 'none',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: 16,
  border: '1px solid #D71844',
  maxWidth: '260px',
});
const StyledButton = styled(Button)({
  color: '#fff',
  background: '#D71844',
  boxShadow: '0 2px 2px #D71844',
  textDecoration: 'none',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: 16,
  maxWidth: '260px',
});

const WhiteColorFactory = () => {
  return (
    <Grid
      container
      sx={{ marginTop: (theme) => theme.spacing(5) }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <div
          style={{
            display: 'grid',
            justifyContent: 'center',
            padding: '16px',
            textAlign: 'left',
          }}
        >
          <CommonTitle />
          <div style={{ marginTop: '8px' }}>
            <Typography variant="body1">1 Old Street Yard, London, EC1Y 8AF</Typography>

            <div style={{ display: 'flex', gap: '8px' }}>
              <DoNotDisturbOnIcon />
              <Typography variant="body1">
                <strong>Old street</strong> 2 mins walk
              </Typography>
            </div>
          </div>

          <div style={{ marginTop: '8px', display: 'grid' }}>
            <Typography variant="caption">All-rounded</Typography>
            <Typography variant="caption">
              A multi-award winning Work Space overlooking London’s Silicon <br /> Roundabout and perfectly positioned
              within Tech City.
            </Typography>
          </div>

          <div style={{ marginTop: '16px', marginBottom: '24px' }}>
            <CommonLinks />
          </div>

          <StyledLinkButton> View workspace solutions</StyledLinkButton>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 415, textAlign: 'left' }}>
          <CardContent>
            <div>
              <Typography variant="caption">
                Our team are here to support you and your business. Get in touch if you have any questions.
              </Typography>
              <Typography>Sales 020 3740 1714</Typography>
            </div>
            <div style={{ marginTop: '16px', marginBottom: '16px' }}>
              <StyledButton fullWidth>Make an Enquiry</StyledButton>
            </div>

            <Divider sx={{ marginBottom: 2 }} />
            <Typography variant="subtitle1">On-site support</Typography>
            <Typography variant="caption">Monday to Friday - 8:30am - 6pm</Typography>
            <Stack direction="row" sx={{ marginTop: 2 }} spacing={2}>
              <Avatar />
              <div style={{ display: 'grid' }}>
                <Typography variant="caption" sx={{ fontSize: '8px', color: 'grey' }}>
                  Building manager
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '8px' }}>
                  Kiran Ramnial
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '8px' }}>
                  020 4502 9689
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ marginTop: 4 }}>
          Beautiful spaces for every working style and business&#63;
          <br />— from start-ups to established brands.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WhiteColorFactory;
