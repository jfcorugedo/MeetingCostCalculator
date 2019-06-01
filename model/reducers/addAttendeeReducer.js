import { ADD_ATTENDEE, RESET_MEETING } from '../actions/actions';

const initialState = [{name: 'Juan', cost: '55'}, {name: 'Pablo', cost: '75'}];

export default  (state = initialState, action) => {

    switch(action.type){
        case ADD_ATTENDEE:
            return [...state, action.attendee];
        case RESET_MEETING:
            return [];
        default:
            return state;
    }
};