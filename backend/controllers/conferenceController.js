import Conference from "../models/conferenceModel.js";

// @desc    Fetch all conference
// @route   GET /api/v1/conference
// @access  Public
const getConferences = async (req, res) => {
  const conference = await Conference.find();
  res.json({
    message: "List of all conference",
    data: conference,
  });
};

// @desc    Create a conference
// @route   POST /api/v1/conference
// @access  Private/Admin
const createConference = async (req, res) => {
  try {
    //const conference = new Conference(req.body);
    const createdConference = await Conference.create(req.body);
    res.status(201).json({
      message: "Conference has been created successfully",
      result: createdConference,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getConferences, createConference };
