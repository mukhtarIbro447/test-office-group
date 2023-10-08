import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Logo } from 'assets';

const menus = [
  {
    name: 'Flourish',
    isDropdown: false,
  },
  {
    name: 'Locations',
    isDropdown: true,
  },
  {
    name: 'Workspace solutions  ',
    isDropdown: true,
  },
  {
    name: 'Community',
    isDropdown: true,
  },
];

const StyledContactButton = styled(Button)({
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '20px',
  background: '#D71844',
  boxShadow: '0 2px 2px #D71844',
  textTransform: 'none',
  fontSize: 16,
  paddingTop: 0,
  paddingBottom: 0,
  '&:hover': {
    backgroundColor: '#FFAAC0',
  },
});
const Header = () => {
  return (
    <AppBar position="static" sx={{ background: (theme) => theme.palette.background.paper }}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch">
          <Grid item xs={3}>
            <div style={{ width: '100%', display: 'flex' }}>
              <img src={Logo} alt="Logo" height={56} width={56} />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div
              style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '24px', paddingTop: '14px' }}
            >
              {menus.map((p) => (
                <div key={p.name} style={{ display: 'flex' }}>
                  <Typography sx={{ color: '#000' }}>{p.name}</Typography>
                  {p.isDropdown && <KeyboardArrowDownIcon color="secondary" />}
                </div>
              ))}

              <div>
                <StyledContactButton>Contact</StyledContactButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
