
import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();


try{
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6624060ce4c05f0ccceb");
}

catch(err){
  console.log(err);
}

export const account = new Account(client);
export const database = new Databases(client, "66263f3141d8bdc69c8c");
export const storage = new Storage(client);
