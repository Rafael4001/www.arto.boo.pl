import axios from "axios";
import { API_URL } from "../../config";


// dodac try catch

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
