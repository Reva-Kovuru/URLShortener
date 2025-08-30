import React from 'react'
import { useState } from 'react'
import axiosInstance from '../lib/axios';
import { useNavigate } from 'react-router-dom';
// Added Later - Start
import { Box, TextField, Button, CircularProgress, IconButton } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';
// Added Later - End

const CreateShortCodePage = () => {
    const [originalUrl, setoriginalUrl] = useState("");
    var [validity, setValidity] = useState(30);
    const [loading, setLoading] = useState(false);
    var [title, setTitle] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validity || validity < 1000*60*3){
            validity += 1000*60*3;
        }
        
        setLoading(true);
        try {
            if(!originalUrl){
                throw new Error("empty OG URL");
            }
            if(!title){
                throw new Error("empty Title");
            }
            console.log(originalUrl, validity);
            await axiosInstance.post('/shorturl/create', {
                originalUrl,
                validity,
                title,
            })
            console.log("created a new ShortUrl");
            navigate("/")
        } catch (error) {
            console.log("---------ERROR UPDATING NEW SHORTURL--------\n",error);
        } finally{
            setLoading(false);
        }
    }

    return (
    <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        width: '100%',
        maxWidth: '600px',
        margin: '2rem auto'
        }}
    >
        <LinkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
        fullWidth
        label="Enter your long URL"
        variant="outlined"
        value={originalUrl}
        onChange={(e) => setoriginalUrl(e.target.value)}
        disabled={loading}
        />
        <TextField
        fullWidth
        label="Enter a Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
        />
        <TextField
        fullWidth
        label="Enter the validity in Minutes"
        type="number"
        variant="outlined"
        value={validity}
        onChange={(e) => setValidity((e.target.value) * (1000 * 60))}
        disabled={loading}
        />
        <Button
        type="submit"
        variant="contained"
        endIcon={loading ? null : <SendIcon />}
        disabled={loading}
        sx={{
            minWidth: '120px', // Give the button a fixed width
            height: '56px' // Match the TextField height
        }}
        >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Shorten'}
        </Button>
    </Box>
    );
}

export default CreateShortCodePage;