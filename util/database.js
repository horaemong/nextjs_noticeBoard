import { MongoClient } from "mongodb";

let url = "mongodb+srv://hojae:ksybym486@cluster0.ztdvnuk.mongodb.net/notice_board?retryWrites=true&w=majority";

const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
