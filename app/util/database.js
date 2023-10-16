import { MongoClient } from "mongodb";

url = "mongodb+srv://hojae:ksybym486@cluster0.ztdvnuk.mongodb.net/?retryWrites=true&w=majority";

export default async function connect() {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("notice_board");
  return client.db();
}
