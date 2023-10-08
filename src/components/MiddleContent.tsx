import Typography from '@mui/material/Typography';
import CommonLinks from './CommonLinks';
import CommonTitle from './CommonTitle';

const MiddleContent = () => {
  return (
    <div
      style={{
        background: '#F0F5F7',
        height: '286px',
        position: 'relative',
        borderBottom: '1px solid darkgrey',
      }}
    >
      <div
        style={{
          width: '287px',
          height: '74px',
          background: '#fff',
          position: 'absolute',
          bottom: 0,
          marginLeft: '24px',
          padding: '16px',
        }}
      >
        <CommonTitle />
      </div>
      <div
        style={{
          padding: '32px, 64px, 32px, 64px',
          position: 'absolute',
          bottom: 18,
          left: '500px',
        }}
      >
        <CommonLinks />
      </div>
    </div>
  );
};

export default MiddleContent;
