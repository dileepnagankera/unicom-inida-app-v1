import mongoose from "mongoose";

const conferenceSchema = mongoose.Schema(
  {
    conferenceName: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    conferenceDate: {
      type: String,
    },
    location: {
      type: String,
    },
    country: {
      type: String,
    },
    topicsToBeCovered: {
      type: String,
    },
    codeOfConduct: {
      type: String,
    },
    callForParticipation: {
      type: String,
    },
    codeOfConduct: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Conference = mongoose.model("Conference", conferenceSchema);

export default Conference;
