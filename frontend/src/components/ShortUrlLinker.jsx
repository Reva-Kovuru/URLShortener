import React from 'react'
import { Link } from 'react-router-dom'


// All the properties (or) function attributes are passed to the first variable name, not individually. So use {} to bundle all them into a single property.
const ShortUrlLinker = ({urlShortCode, urlTitle}, setUrlEntries) => {
  return (
    <div>
      <span> {urlTitle} ======== </span>
        <Link to={`/shorturl/${urlShortCode}`} target='_blank' rel='noopener noreferrer'>
           <span>{urlShortCode}</span>
        </Link>
    </div>
  )
}

export default ShortUrlLinker