import e from "express";
import URL from "../models/urlModel.js";
import { nanoid } from "nanoid";

export const createShortenUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      return res
        .status(400)
        .json({ message: "invalid url please enter valid url" });
    }
    const shortId = nanoid(8);
    await URL.create({
      shortId: shortId,
      redirectURL: longUrl,
    });
    return res.status(200).json({ shortUrl: shortId });
  } catch (error) {
    console.log(error);
  }
};

export const getUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    if (!shortId) {
      return res.status(400).json({ message: "please enter valid url" });
    }
    const entry = await URL.findOne({ shortId });
    res.redirect(entry.redirectURL);
  } catch (error) {
    console.log(error);
  }
};


export const getAll = async (req, res) => {
  try {
     await URL.find()
    .then((result)=> {
      console.log(result)
       return res.status(400).json({url:result});
    })
    .catch((error) => {
      console.log(error)
    })
  } catch (error) {
    console.log(error)
  }
}
