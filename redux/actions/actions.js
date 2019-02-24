export const ADD_ATTENDEE = 'ADD_ATTENDEE';

export function addAttendee(name, cost) {
    return {
        type: ADD_ATTENDEE,
        attendee: {
            name,
            cost
        }
    }
}