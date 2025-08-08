import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  imageUrl: string; // Base64
  type: 'product' | 'service';
}

const CategorySchema: Schema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
    },
    imageUrl: {
      type: String,
      required: [true, 'Category image is required'],
    },
    type: {
      type: String,
      enum: ['product', 'service'],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICategory>('Category', CategorySchema);
