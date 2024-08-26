import connectDB from "~~/mongodb/database";
import UserModel from "~~/mongodb/models/UserModel";

export async function updateProfile(wallet, profileData) {
  try {
    await connectDB();
    const account = await UserModel.findOneAndUpdate({ wallet }, { $set: profileData }, { new: true });
    return { success: true, message: "Profile updated", account };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error updating profile" };
  }
}
