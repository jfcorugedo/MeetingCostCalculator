import { UPDATE_MEETING_COST, RESET_MEETING } from '../actions/actions';

export default  (state = 0, action) => {

    switch(action.type){
        case UPDATE_MEETING_COST:
            return Number(action.currentCost).toFixed(2);
        case RESET_MEETING:
            return 0;
        default:
            return state;
    }
};