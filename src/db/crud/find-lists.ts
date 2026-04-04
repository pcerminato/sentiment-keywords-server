import { runDbConnection } from "../connection";
import { Search, Sentiment } from "../../types";

export async function find(search?: Search) {
  let db;

  try {
    db = await runDbConnection();
    console.log(search);
    const collection = db?.collection<Sentiment>("sentiment");
    const results = await collection?.find()
      .limit(search?.limit || 20)
      .skip(search?.skip || 0)
      .toArray();

    // TODO: add text search by name. The index was defined in mongoDb
    /*
    const results = await collection?.aggregate([
      { $match: { $text: { $search: `"${search?.name}"` || "" } } },
      { "$limit": search?.limit || 20 },
      { "$skip": search?.skip || 0 },
    ])
      .toArray();
      */

    return results;
  } catch (error) {
    console.error(error);
  } finally {
    db?.client.close();
  }
}
