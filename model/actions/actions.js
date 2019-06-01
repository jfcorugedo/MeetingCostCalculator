export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const UPDATE_MEETING_COST = 'UPDATE_MEETING_COST';

export function createAddAttendeeAction(name, cost) {
    return {
        type: ADD_ATTENDEE,
        attendee: {
            name,
            cost
        },
    }
}

export function updateMeetingCost(currentCost) {
    return {
        type: UPDATE_MEETING_COST,
        currentCost,
    }
}