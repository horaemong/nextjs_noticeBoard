import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  let db = (await connectDB).db("notice_board");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((post, index) => {
        return (
          <Link href={"/detail/" + post._id.toString()} key={index}>
            <div className="list-item">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
