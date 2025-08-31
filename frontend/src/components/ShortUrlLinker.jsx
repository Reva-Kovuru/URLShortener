import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Box, Link, Typography, CssBaseline } from '@mui/material';


// All the properties (or) function attributes are passed to the first variable name, not individually. So use {} to bundle all them into a single property.
const ShortUrlLinker = ({urlShortCode, urlTitle}, setUrlEntries) => {
  return (
    <div>
      <center>
        <Typography variant="h5" sx={{ color: 'black', fontWeight: "normal"  }}>
            { urlTitle }
        </Typography>
        <Link
          component={RouterLink}
          to={`/shorturl/${urlShortCode}`}
          target='_blank' rel='noopener noreferrer'
          sx={{ textDecoration: 'none', alignItems: "center" }}
          >
          <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold', backgroundColor: "yellow"  }}>
            { urlShortCode }
          </Typography>
        </Link>
      </center>
    </div>
  )
}

export default ShortUrlLinker