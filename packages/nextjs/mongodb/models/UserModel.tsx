import { Schema, model, models, connection } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    wallet: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: String,
      required: false,
      unique: false,
    },
    profilePicture: {
      type: String,
      required: false,
    },
    bannerPicture: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    aboutSection: {
      raisedIn: {
        type: String,
        required: false,
      },
      currentlyLivingIn: {
        type: String,
        required: false,
      },
      languagesSpoken: {
        type: [String],
        required: false,
      },
      occupation: {
        type: String,
        required: false,
      },
      latestEducation: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true },
);

const UserModel = models.user || model("user", userSchema, "Accounts_001");

connection.useDb("Accounts");
export default UserModel;
