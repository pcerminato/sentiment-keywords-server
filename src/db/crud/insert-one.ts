import { runDbConnection } from "../connection";
import { Sentiment } from "../../types";

export async function insertOne(sentiment: Sentiment) {
  let db, result;

  try {
    db = await runDbConnection();

    const collection = db?.collection<Sentiment>("sentiment");

    result = await collection?.insertOne(sentiment);

    console.log(`A document was inserted with the _id: ${result?.insertedId}`);
  } catch (error) {
    console.error(error);
  } finally {
    db?.client.close();
  }

  return result;
}
