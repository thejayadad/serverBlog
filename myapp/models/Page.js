import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
    uri: {type: String, required: true, min: 1, unique: true},
    owner: {type: String, required: true},
    displayName: {type: String, default: ''},
    location: {type: String, default: ''},
    bio: {type: String, default: ''},
    bgType: {type: String, default: 'color'},
    bgColor: {type: String, default: '#000'},
    bgImage: {type: String, default: ''},
    buttons: {type: Object, default: {}},
}, {timestamps: true})

export default mongoose?.models?.Page || mongoose.model("Page", PageSchema)