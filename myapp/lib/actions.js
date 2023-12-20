"use server"
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import UserProfile from "@/models/UserProfile";
import User from "@/models/User";
import db from "./db";

export const updateUserProfile = async (formData) => {
    const { name, email, password, owner, displayName, favoriteTeam, bio, bgType, bgColor, bgImage, buttons } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const updateFields = {
            name, email, password, owner, displayName, favoriteTeam, bio, bgType, bgColor, bgImage, buttons
          };
          Object.keys(updateFields).forEach(
            (key) =>
              (updateFields[key] === "" || undefined) && delete updateFields[key]
          );
          await User.findByIdAndUpdate(id, updateFields)
      
    } catch (error) {
        
    }
}