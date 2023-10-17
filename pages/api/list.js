import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  let db = (await connectDB).db("notice_board");
  let result = await db.collection("post").find().toArray();
  res.status(200).json(result);
}
