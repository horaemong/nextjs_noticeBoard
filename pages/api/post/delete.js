import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let db = (await connectDB).db("notice_board");

  if (req.method === "DELETE") {
    await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
    res.redirect(302, "/list");
  }
}
