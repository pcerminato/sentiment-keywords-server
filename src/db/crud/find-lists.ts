import { runDbConnection } from "../connection";
import { Search, Sentiment } from "../../types";

export async function find(search?: Search) {
  let db;

  try {
    db = await runDbConnection();

    const collection = db?.collection<Sentiment>("sentiment");

    return await collection?.find()
      .map(({ _id, name }) => ({
        id: _id,
        name,
      }))
      .limit(search?.limit || 20)
      .skip(search?.skip || 0)
      .toArray();
  } catch (error) {
    console.error(error);
  } finally {
    db?.client.close();
  }
}
