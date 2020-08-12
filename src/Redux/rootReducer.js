import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/userReducer";
import cartReducer from "./Cart/CartReducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["japacart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  japacart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
