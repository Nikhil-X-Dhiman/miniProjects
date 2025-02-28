import fs from 'fs/promises'
import path from "path";

const filePath = path.join(import.meta.dirname, '..', 'data', 'storage.json')
const readStorage = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

const writeStorage = (data) => {
  try {
    fs.writeFile(filePath, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}

export { readStorage, writeStorage }