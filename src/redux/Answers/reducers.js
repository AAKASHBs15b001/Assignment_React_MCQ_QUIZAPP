import actions from './actions';
import questions from '../../Questions'
import {Submittheoption,Skiptheoption} from './Submit.utils'
const initState= {
    switch:'on',
    Questions:questions,
    Answers:[0,0,0,0,0,0,0,0]

}

export default function SubmitHandler(state= initState, action){
    switch(action.type){
        case actions.SUBMIT_THE_ANSWER:
            //console.log('get User success reducer', action.myUsers)
            return{
                ...state,
                switch:'yes',
                Answers:Submittheoption(action.payload[0],action.payload[1],state.Answers)
                
                
            };
            case actions.SKIP_THE_ANSWER:
            //console.log('get User success reducer', action.myUsers)
            return{
                ...state,
                switch:'on',
                Answers:Skiptheoption(action.payload,state.Answers)
            };
            default:
                return state;
    }

    
}