import { UPDATE_MEETING_COST } from '../actions/actions';

export default  (state = 0, action) => {

    switch(action.type){
        case UPDATE_MEETING_COST:
            return Number(action.currentCost).toFixed(2);
        default:
            return state;
    }
};