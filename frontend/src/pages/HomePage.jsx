import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../lib/axios';
import ShortUrlLinker from '../components/ShortUrlLinker';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const HomePage = () => {
    const [urlEntries, setUrlEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const fetchUrls = async () =>{
            try {
                const res = await axiosInstance.get("/shorturl");
                setUrlEntries(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("----------------Error fetching notes!------------\n", error);
            } finally{
                setLoading(false);
            }
        };
        fetchUrls();
    }, [] )

  return (
    <div>
        <center>
        { loading && <div>Loading...</div> }
        { urlEntries.length === 0 && <div>No Entries</div> }
        {
            urlEntries.length > 0 &&
            <Stack> {urlEntries.map(url => (
                <ShortUrlLinker key={url._id} urlShortCode={url.shortcode} urlTitle={url.title} setUrlEntries={setUrlEntries} />
            ))}
            </Stack>
        }
        <div>
        <Link to={'/create'}>
            <Button variant="contained" endIcon={<AddCircleIcon />}>
                Create New Short URL
            </Button>
        </Link>
        </div>
        </center>
    </div>
  )
}

export default HomePage