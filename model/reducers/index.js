import { combineReducers } from "redux";
import addAttendeeReducer from './addAttendeeReducer';

const rootReducer = combineReducers({
    attendees: addAttendeeReducer,
});

export default rootReducer;