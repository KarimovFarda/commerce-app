import mongoose, { Schema } from "mongoose";

const favouritesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    }
    ,
    price: {
        type: String,
        required: true,
    }
    ,
    rating: {
        type: String,
        required: true,
    }
    ,
    date: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    index : {
        type : Number,
        required : true
    }

})

export default mongoose.model("Favourites", favouritesSchema);