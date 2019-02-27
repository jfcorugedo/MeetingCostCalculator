import { combineReducers } from "redux";
import addAttendeeReducer from './addAttendeeReducer';
import updateMeetingCostReducer from './updateMeetingCostReducer';

const rootReducer = combineReducers({
    attendees: addAttendeeReducer,
    meetingCost: updateMeetingCostReducer
});

export default rootReducer;