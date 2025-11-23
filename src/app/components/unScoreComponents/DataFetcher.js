'use server'

import { getUNScoreData } from "../../dbManagement/getUNScoreData";

export async function fetchData() {
  try {
    const data = await getUNScoreData();

    if (!data || data.length === 0) {
      console.log('No UNScore data found in database');
      return [];
    }

    return data;

  } catch (error) {
    console.error('Error fetching UNScore data:', error);
    return [];
  }
}
