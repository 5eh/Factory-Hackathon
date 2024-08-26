import connectDB from "~~/mongodb/database";
import UserModel from "~~/mongodb/models/UserModel";

export async function createAccount(wallet) {
  try {
    await connectDB();
    const account = await UserModel.findOne({ wallet });
    if (!account) {
      const newAccount = new UserModel({ wallet });
      await newAccount.save();
      return { success: true, message: "Account created" };
    }
    return { success: true, message: "Welcome Back" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error creating account" };
  }
}
