import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

import { Box, Link, Typography, CssBaseline } from '@mui/material';


const HeadNav = () => {
  return (
    <>
    <CssBaseline />
      <Box sx={{ bgcolor: '#7300ffff', height: '12vh', padding: '4vh' }} >
        <center>
        <Link
          component={RouterLink}
          to="/"
          sx={{ textDecoration: 'none', alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold'  }}>
            ShortCode
          </Typography>
        </Link>
        </center>
      </Box>
    </>
  );
}

export default HeadNav;