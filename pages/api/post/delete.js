import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  let db = (await connectDB).db("notice_board");
  let result = await db.collection("post").findOne({ _id: new ObjectId(req.body) });
  let session = await getServerSession(req, res, authOptions);

  if (req.method === "DELETE") {
    if (result.author == session.user.email) {
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
      res.redirect(302, "/list");
    } else {
      return res.status(500).json("현재유저와 작성자 불일치");
    }
  }
}
