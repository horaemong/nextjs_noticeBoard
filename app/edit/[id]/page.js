import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js";

export default async function Edit(props) {
  let db = (await connectDB).db("notice_board");
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  console.log(props.params.id);

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <input type="text" name="id" defaultValue={result._id} style={{ display: "none" }} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
