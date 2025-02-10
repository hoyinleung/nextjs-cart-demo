"use server"

import connectToDatabase from "@/lib/db";
import {handleError} from "@/lib/util";

const collection = 'products'

export async function getAll() {
  try {
    const { db } = await connectToDatabase();
    const data = await db
    .collection(collection)
    .find({}, { projection: { _id: 0 } })
    .toArray();

    if (data) return data
    return false

  } catch (error) {
    handleError(error);
  }
}
export async function getById(id:number) {
  try {
    const { db } = await connectToDatabase();
    const data = await db
    .collection(collection)
    .findOne({ id }, { projection: { _id: 0 } });

    if (data) return data
    return false

  } catch (error) {
    handleError(error);
  }
}