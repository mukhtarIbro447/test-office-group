import Link from '@mui/material/Link';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)({
  color: '#01101E',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '26px',
  textDecorationColor: '#000',
});

const CommonLinks = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ display: 'flex' }}>
          <CollectionsBookmarkIcon />
          <StyledLink href="#">Gallery</StyledLink>
        </div>
        <div style={{ display: 'flex' }}>
          <SlideshowIcon />
          <StyledLink href="#">Virtual tour</StyledLink>
        </div>
        <div style={{ display: 'flex' }}>
          <NextPlanIcon />
          <StyledLink>Floor plan</StyledLink>
        </div>
      </div>
    </>
  );
};
export default CommonLinks;
