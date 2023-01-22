import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
    {
        playerId: {
            type: Number,
            required: true,
            min: 1,
            max: 3,
          },
          gameDate: {
            type: String,
            required: true,
            min: 2,
            max: 50,
          },
          opponent: {
            type: String,
            required: true,
            max: 50,
            unique: true,
          },
          battingAvg: {
            type: Number,
            required: true,
            min: 1,
          },
          plateAppearances: {
            type: Number,
            required: true,
            min: 1,
          },
          atBats: {
            type: Number,
            required: true,
            min: 1,
          },
          runs: {
            type: Number,
            required: true,
            min: 1,
          },
          hits: {
            type: Number,
            required: true,
            min: 1,
          },
          runsBattedIn: {
            type: Number,
            required: true,
            min: 1,
          },
          doubles: {
            type: Number,
            required: true,
            min: 1,
          },
          triples: {
            type: Number,
            required: true,
            min: 1,
          },
          homeruns: {
            type: Number,
            required: true,
            min: 1,
          },
          class: {
            type: String,
            required: true,
            min: 2,
            max: 50,
          },
    },
    { timestamps: true }
);

const PlayerStat = mongoose.model("PlayerStat", PlayerSchema);
export default PlayerStat;

