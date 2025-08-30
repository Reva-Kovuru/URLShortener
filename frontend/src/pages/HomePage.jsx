import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../lib/axios';
import ShortUrlLinker from '../components/ShortUrlLinker';

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
        { loading && <div>Loading...</div> }
        { urlEntries.length === 0 && <div>No Entries</div> }
        {
            urlEntries.length > 0 &&
            <div> {urlEntries.map(url => (
                <ShortUrlLinker key={url._id} urlShortCode={url.shortcode} urlTitle={url.title} setUrlEntries={setUrlEntries} />
            ))}
            </div>
        }
        <div>
        <Link to={'/create'}>
            <button>Press here to create ShortURLs</button>
        </Link>
        </div>
    </div>
  )
}

export default HomePage