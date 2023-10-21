import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export default async function List() {
  let db = (await connectDB).db("notice_board");
  let result = await db.collection("post").find().toArray();
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
