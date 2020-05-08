import { onMounted, ref } from '@vue/composition-api';
import { getAll } from '../services/flight.service';

export function useFlights() {
  const flights = ref([]);

  onMounted(() => {
    getFlights();
  });

  async function getFlights() {
    let rawFlightData = [];
    try {
      rawFlightData = await getAll();
    } catch (error) {
      console.error(error);
    } finally {
      mapFlightData(rawFlightData);
    }
  }

  function mapFlightData(flightData) {
    flights.value = [
      ...flightData.data
        .sort((a, b) => {
          return new Date(a.Timestamp) - new Date(b.Timestamp);
        })
        .map(item => {
          const { Latitude, Longitude, Altitude } = item;
          return [Latitude, Longitude, Altitude];
        })
        .filter(item => {
          if (item[0] + item[1] + item[2] !== 0) {
            return item;
          }
        }),
    ];
  }

  return { flights };
}
