import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import app from "./AppReducer";
import account from "./AccountReducer";
import device from "./DeviceReducer";
import settings from "./SettingsReducer";
import { RootNavigationReducer } from "../navigation/RootNavigation";

export default combineReducers({
    nav: RootNavigationReducer,
    form: formReducer,
    account,
    app,
    device,
    settings
});
