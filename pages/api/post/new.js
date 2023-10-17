import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  let db = (await connectDB).db("notice_board");

  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      res.status(400).json({ text: "Bad Request" });
      return;
    }
    await db.collection("post").insertOne(req.body);
    res.redirect(302, "/list");
  }
}
