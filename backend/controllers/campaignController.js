import express from "express";
import Campaign from "../models/Campaigns.js";
export const createCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.find({ name: reg.body.name });

    if (!campaign) {
      const camp = await Campaign.create({ ...req.body });
      res.status(200).json({
        status: "ok",
        message: camp,
      });
    } else {
      res.status(200).json({
        status: "ok",
        message: "campaign Exist renew the contract instead.",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getCampaigns = async (req, res) => {
  try {
    const camp = await Campaign.find();
    res.status(200).json({
      status: "ok",
      message: camp,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCampaign = async (req, res) => {
  try {
    const camp = await Campaign.findOne({ name: req.body.name });
    res.status(200).json({
      status: "ok",
      message: camp,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCampaign = async (req, res) => {
  const camp = await Campaign.findOneAndUpdate(
    { name: req.body.name },
    { ...req.body },
  );
  if (camp) {
    res.status(200).json({
      status: "ok",
      message: camp,
    });
  }
};
