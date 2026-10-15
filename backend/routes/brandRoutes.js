import express from "express";
import {
  getBrand,
  createBrand,
  getBrands,
} from "../controllers/brandController.js";

const router = express.Router();

router.get("/brands", getBrands);
router.post("/brands", getBrand);
router.query("/brand", getBrand);
router.post("/brand", createBrand);

export default router;
