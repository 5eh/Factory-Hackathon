import connectDB from "~~/mongodb/database";
import UserModel from "~~/mongodb/models/UserModel";

export async function findAccountAction(wallet) {
  try {
    await connectDB();
    const account = await UserModel.findOne({ wallet });
    return account;
  } catch (error) {
    console.error(error);
    return null;
  }
}
