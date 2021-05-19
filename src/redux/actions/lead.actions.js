import api from "../api";

const leadRequest = () => async (dispatch) => {
  dispatch({ type: "GET_LEADS_REQUEST", payload: null });
  try {
    const res = await api.get(`/leads`);
    console.log("data here", res);
    dispatch({ type: "GET_LEADS_SUCCESS", payload: res.data.data });
  } catch (error) {
    console.log("error", error.message);
    dispatch({ type: "GET_LEADS_FAILURE" });
  }
};

const addLeads =
  (first_name, last_name, email, mobile, location_type, location_string) =>
  async (dispatch) => {
    dispatch({ type: "ADD_LEADS_REQUEST", payload: null });
    try {
      const res = await api.post("/leads", {
        first_name,
        last_name,
        email,
        mobile,
        location_type,
        location_string,
      });
      dispatch({ type: "ADD_LEADS_SUCCESS", payload: res.data.data });
    } catch (error) {
      console.log("error", error.message);
      dispatch({ type: "ADD_LEADS_FAILURE" });
    }
  };

export const leadActions = { leadRequest, addLeads };
