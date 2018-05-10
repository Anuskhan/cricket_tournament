import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    getdata:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.API:
            return ({
                ...state,
                getdata: action.payload
            })
      
        default:
            return state;
    }

}