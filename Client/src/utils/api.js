import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://homyz-real-estate-project.vercel.app/api",
  // baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/getAllResidencies", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/BookedVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please Try again!!!");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/cancelBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, please Try again!!!");
    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};


export const getAllFav = async (email, token) => {
  if(!token) return 
  try{

    const res = await api.post(
      `/user/allFav`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["favResidenciesID"]

  }catch(error)
  {
    toast.error("Something went wrong while fetching favs");
    throw error
  }
} 


export const getAllBookings = async (email, token) => {
  if(!token) return 
  try{

    const res = await api.post(
      `/user/allBookings`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];

  }catch(error)
  {
    toast.error("Something went wrong while fetching bookings", error);
    console.log("error",error)
    throw error
  }
} 

export const createResidency = async (data, token) => {
  console.log(data);
  try {
    const res = await api.post(
      `/residency/createResidency`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data; // Ensure the response data is returned on success
  } catch (error) {
    // Log the error for debugging and throw it to propagate to useMutation
    console.error("Error in createResidency:", error.response?.data || error.message);
    throw error.response || new Error("An unknown error occurred"); // Throw response or generic error
  }
};


// router.post("/createResidency", createResidency)
// router.get("/getAllResidencies", getAllResidencies)
// router.get("/:id",getResidencyById)

// router.post("/register", createUser)
// router.post("/BookedVisit/:id",BookedVisit)
// router.post("/allBookings",allBookings)
// router.post("/cancelBooking/:id", cancelBooking)
// router.post("/toFav/:rid", toFav)
// router.post("/allFav", getAllFavorites)
