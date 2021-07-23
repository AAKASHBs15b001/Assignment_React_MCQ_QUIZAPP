import actions from './actions';

const initState= {
    switch:'no'}

export default function switcher(state= initState, action){
    switch(action.type){
        case actions.GET_TIMER_ON:
            //console.log('get User success reducer', action.myUsers)
            return{
                ...state,
                switch:'yes'
            };
            case actions.GET_TIMER_OFF:
            //console.log('get User success reducer', action.myUsers)
            return{
                ...state,
                switch:'no'
            };
            case actions.RESET_TIMER:
              //console.log('get User success reducer', action.myUsers)
              return{
                  ...state,
                  switch:'reset'
              };
            default:
                return state;
    }

    
}