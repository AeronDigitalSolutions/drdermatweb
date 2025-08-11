import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  category: string;
  company: string;
  name: string;
  quantity: number;
  price: number;
  discountPrice: number;
  description: string;
  image: string; // ✅ Base64 image
}

const ProductSchema: Schema = new Schema(
  {
    category: { type: String, required: true },
    company: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, // ✅ Base64 string
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", ProductSchema);
