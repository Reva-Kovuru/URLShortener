import UrlEntry from "../models/urlEntry.js";
import { nanoid } from "nanoid";


export async function getAllLiveUrl(req, res){
    try {
        const shortUrls = await UrlEntry.find().sort();
        for(const url of shortUrls){
            if( Date.now() > (url.validity + url.updatedAt.getTime()) ){
                await UrlEntry.deleteOne(url);
            }
        }
        res.status(200).json(shortUrls);
    } catch (error) {
        console.error("----------------ERRORSTACK[getAllLiveUrl]-------------------\n", error);
        res.status(500).json({message:"Sorry, Server got stumped"});
    }
}

export async function createShortUrl(req, res){
    try{
        const {originalUrl, validity, title} = req.body;
        if(!originalUrl){
            console.log(originalUrl)
            return res.status(400).json({ error: 'A valid URL must be provided.' });
        }
        let shortcode;
        do {
            shortcode = nanoid(7);
        } while(!(UrlEntry.findById(shortcode)));
        const newUrlEntry = new UrlEntry({originalUrl:originalUrl, shortcode:shortcode, validity:validity, title:title});

        const savedUrlEntry = await newUrlEntry.save();
        res.status(210).json("New URL entry Added\n", savedUrlEntry);
    } catch(error){
        console.error("----------------ERRORSTACK[createShortUrl]-------------------\n", error);
        res.status(500).json({message:"Sorry, Server got stumped"});
    }
}

export async function redirectUrl(req, res){
    try{
        const redirectUrlEntry = await UrlEntry.findOne({shortcode: req.params.shortcode});
        console.log("Started, this is redirectedUrl", redirectUrlEntry);
        if(!redirectUrlEntry) return res.status(404).json({message:"kanipinchadam ledu, Poyindi"});
        
        // Delete code; I need to put it in homepage function.
        const urlCreateEpoch = redirectUrlEntry.updatedAt.getTime();
        const expiryEpoch = redirectUrlEntry.validity + urlCreateEpoch;
        if( Date.now() > expiryEpoch ){
            await UrlEntry.findOneAndDelete(redirectUrlEntry);
            return res.status(410).json({message: "Code Expired"});
        }
        return res.status(200).json({originalUrl: redirectUrlEntry.originalUrl});
    } catch(error){
        console.error("----------------ERRORSTACK[redirectUrl]-------------------\n", error);
        return res.status(500).json({message:"Sorry, Server got stumped"});
    }
}
