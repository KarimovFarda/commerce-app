import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
    productInfo: {
        type: Array,
        required: true
    },
    totalPrice: {
        type: String,
        required: true,
    }
   
})

export default mongoose.model("Products", productsSchema);