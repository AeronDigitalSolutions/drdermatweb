import mongoose, { Schema, Document } from "mongoose";

export interface IClinic extends Document {
  name: string;
  mobile: string;
  whatsapp?: string;
  mapLink?: string;
  address: string;
  verified: boolean;
  trusted: boolean;
  imageUrl: string; // stores base64 string
}

const ClinicSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String },
    mapLink: { type: String },
    address: { type: String, required: true },
    verified: { type: Boolean, default: false },
    trusted: { type: Boolean, default: false },
    imageUrl: { type: String, required: true }, // base64 string
  },
  { timestamps: true }
);

export default mongoose.model<IClinic>("Clinic", ClinicSchema);
