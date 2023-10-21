import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let db = (await connectDB).db("notice_board");
  let session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (session) {
    req.body.author = session.user.email;
    if (req.method === "POST") {
      if (req.body.title === "" || req.body.content === "") {
        res.status(400).json({ text: "Bad Request" });
        res.redirect(302, "/list");
      }
      await db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    }
  }
}
