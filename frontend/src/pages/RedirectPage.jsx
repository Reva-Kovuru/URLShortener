import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axiosInstance from '../lib/axios';

const RedirectPage = (props) => {
    const { shortcode } = useParams();
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchAndRedirectUrl = async () => {
            try{
                setLoading(true);
                setError(false);
                const redirectUrl = await axiosInstance.get(`/shorturl/${shortcode}`)
                console.log(redirectUrl.data);
                // if(!redirectUrl.ok){
                //     throw new Error(`URL Not Found. Status: ${redirectUrl.status}`)
                // }
                const data = await redirectUrl.data;
                window.location.replace(data.originalUrl);
            } catch (error){
                setError(true);
                console.error(`--------------ERRORSTACK[RedirectPage]-------------------`, error);
                setLoading(false);
            }
        };

        fetchAndRedirectUrl();
    }, [])


    const navigate = useNavigate();
    
    if(loading){
        return <h1>loading...</h1>
    }
    if(error){
        return <h1>Url not found...   :(</h1>
    }

  return (
    <div>RedirectPage is redirecting...</div>
  )
}

export default RedirectPage;