import axios from 'axios';

const API = {
  GET_ALL: './zadanie-telemetria.json',
};

export async function getAll() {
  return await axios.get(API.GET_ALL);
}
