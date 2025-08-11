import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin"; // import Admin model

// POST /api/admins
export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { empId, name, email, number, password } = req.body;

    // Validate all fields
    if (!empId || !name || !email || !number || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicate email
    const existingEmail = await Admin.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check for duplicate empId
    const existingEmpId = await Admin.findOne({ empId });
    if (existingEmpId) {
      return res.status(400).json({ message: "Employee ID already exists" });
    }

    const newAdmin = new Admin({ empId, name, email, number, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (err: any) {
    console.error("Admin creation error:", err.message);
    res.status(500).json({ message: "Failed to create admin", error: err.message });
  }
};
