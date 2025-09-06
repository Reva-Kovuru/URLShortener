import mongoose from "mongoose"

const urlEntrySchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true,
        },
        shortcode: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        title: {
            type: String,
            required: true
        },
        validity:{
            type: Number,
            required: true,
            default: 10 * 60 * 1000,
        }
    },
    {
        timestamps: true,
    }
);

const UrlEntry = mongoose.models.UrlEntry || mongoose.model("UrlEntry", urlEntrySchema);

export default UrlEntry;