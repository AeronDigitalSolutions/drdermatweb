import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

// Routes
import authRoutes from './src/routes/AuthRouter';
import userRoutes from './src/routes/UserRouter';
import adminRoutes from './src/routes/AdminRouter';
import categoryRoutes from './src/routes/Category';
import clinicRoutes from './src/routes/clinicRoutes';
import productRoutes from './src/routes/productRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' }));

// Static folder for serving uploaded images
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));


// API routes
app.use('/api/clinics', clinicRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('✅ MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
