import express from "express";
import Brand from "../models/Brand.js";

export const getBrands = async (req, res) => {
  const brandName = req.body;
  console.log(brandName);
  const brand = await Brand.find();
  try {
    res.status(200).json({
      status: "ok",
      brand: brand,
      name: brand.name,
      awards: brand.awards,
      address: brand.address,
    });
  } catch (error) {}
};
export const getBrand = async (req, res) => {
  const brandName = req.body.name;
  console.log(brandName);
  const brand = await Brand.findOne({ name: brandName });
  console.log(brand);
  try {
    res.status(200).json({
      status: "ok",
      brand: brand,
      name: brand.name,
      awards: brand.awards,
      address: brand.address,
    });
  } catch (error) {}
};
export const createBrand = async (req, res) => {
  // console.log(req);
  console.log();
  try {
    const brand1 = await Brand.findOne({ name: req.body.name });
    if (!brand1) {
      const brand = await Brand.create(req.body);
      console.log(req.body);
      if (brand.status === 200) {
        res.status(200).json({
          status: "ok",
          name: brand.name,
          awards: brand.awards,
          address: brand.address,
        });
      }
    }
    res.status(200).json({
      status: "failed",
      message: "Brand Already Exist.",
    });
  } catch (error) {
    console.log(error.message);
  }
};
