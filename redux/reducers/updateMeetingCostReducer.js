import { UPDATE_MEETING_COST } from '../actions/actions';

export default  (state = 0, action) => {

    switch(action.type){
        case UPDATE_MEETING_COST:
            return action.currentCost;
        default:
            return state;
    }
};