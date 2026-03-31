import { runDbConnection } from "../connection";
import { Sentiment } from "../../types";

export async function insertOne(sentiment: Sentiment) {
  let db;

  try {
    db = await runDbConnection();

    const collection = db?.collection<Sentiment>("sentiment");

    const result = await collection?.insertOne(sentiment);

    if (result?.acknowledged) {
      return { _id: result.insertedId, ...sentiment };
    }

    return result;
  } catch (error) {
    console.error(error);
  } finally {
    db?.client.close();
  }
}
