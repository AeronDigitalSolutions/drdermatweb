import express, { Request, Response } from 'express';
import Clinic from '../models/clinic';

const router = express.Router();

// ✅ Create Clinic (Base64 image)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, mobile, whatsapp, mapLink, address, verified, trusted, imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: 'Image is required.' });
    }

    const newClinic = new Clinic({
      name,
      mobile,
      whatsapp,
      mapLink,
      address,
      verified,
      trusted,
      imageUrl,
    });

    await newClinic.save();
    res.status(201).json(newClinic);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create clinic.', error: err });
  }
});

// ✅ Get all clinics
router.get('/', async (_req: Request, res: Response) => {
  try {
    const clinics = await Clinic.find();
    res.status(200).json(clinics);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch clinics.', error: err });
  }
});


// ✅ Update clinic
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedClinic = await Clinic.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedClinic) return res.status(404).json({ message: 'Clinic not found' });
    res.status(200).json(updatedClinic);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update clinic.', error: err });
  }
});

// ✅ Delete clinic
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedClinic = await Clinic.findByIdAndDelete(id);
    if (!deletedClinic) return res.status(404).json({ message: 'Clinic not found' });
    res.status(200).json({ message: 'Clinic deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete clinic.', error: err });
  }
});


export default router;
