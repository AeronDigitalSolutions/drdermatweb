// routes/AuthRouter.ts
import { Router } from "express";
import { login, signup } from "../controllers/AuthController";
import { validateLogin, validateSignup } from "../middleware/AuthValidation";

const router = Router();

router.post("/signup", validateSignup, signup);
router.post("/login", validateLogin, login);

export default router;
