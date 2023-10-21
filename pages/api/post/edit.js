import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let db = (await connectDB).db("notice_board");

  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      res.status(400).json({ text: "Bad Request" });
      res.redirect(302, "/list");
    }
    await db.collection("post").updateOne(
      { _id: new ObjectId(req.body.id) },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
        },
      }
    );
    res.redirect(302, "/list");
  }
}
