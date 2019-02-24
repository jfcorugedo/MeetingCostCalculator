import { combineReducers } from "redux";
import addAttendeeReducer from './addAttendeeReducer';

const rootReducer = combineReducers({
    meeting: addAttendeeReducer
});

export default rootReducer;