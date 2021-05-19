import { combineReducers } from "redux";
import leadReducer from "./lead.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  lead: leadReducer,
  route: routeReducer,
  user: userReducer,
});
