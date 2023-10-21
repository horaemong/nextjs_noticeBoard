import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "e0bdd39f90e28a7f6c6d",
      clientSecret: "61d4558d15ebc2a2d49e765f483336a622350986",
    }),
  ],
  secret: "jwt생성시쓰는암호",
  adapter: MongoDBAdapter(connectDB), //추가함
};
export default NextAuth(authOptions);
