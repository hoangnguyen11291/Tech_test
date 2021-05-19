const initialState = {
  leads: [],
  loading: false,
};

const leadReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_LEADS_REQUEST":
      state.loading = true;
      break;
    case "GET_LEADS_SUCCESS":
      state.leads = action.payload;
      state.loading = false;
      break;
    case "GET_LEADS_FAILURE":
      state.loading = false;
      break;
    case "ADD_LEADS_REQUEST":
      state.loading = true;
      break;
    case "ADD_LEADS_SUCCESS":
      state.leads = payload;
      state.loading = false;
      break;
    case "ADD_LEADS_FAILURE":
      state.loading = false;
      break;
    default:
      break;
  }
  return { ...state };
};

export default leadReducer;
