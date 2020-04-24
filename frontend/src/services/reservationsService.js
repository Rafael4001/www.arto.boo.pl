import axios from "axios";
import { API_URL } from "../config";


// dodac try catch

export const getReservations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response
  } catch (error) {
    console.error(error);
  }
}

export const createReservation = async (values) => {
  const {
    weddingDate,
    weddingAddress,
    weddingHotelName,
    weddingHotelAddress,
    weddingStatus,
    weddingAdditionalDetails,
  } = values

  await axios.post(API_URL,
    {
      weddingDate,
      weddingAddress,
      weddingHotelName,
      weddingHotelAddress,
      weddingStatus,
      weddingAdditionalDetails,
    }
  );
}

export const deleteReservation = async (id) => {
  await axios.delete(`${API_URL}/${id}`,);
}
