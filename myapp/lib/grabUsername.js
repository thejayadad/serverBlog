'use server';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import db from "@/lib/db";
import Page from "@/models/Page";

export default async function grabUsername(formData) {
    const username = formData.get('username');
    db.connect()
    const existingPageDoc = await Page.findOne({uri:username});
    if (existingPageDoc) {
      return false;
    } else {
      const session = await getServerSession(authOptions);
      return await Page.create({
        uri:username,
        owner:session?.user?.email,
      });
    }

}