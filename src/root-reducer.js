import { combineReducers } from 'redux';

import Timerreducer from './redux/Timer/reducer'
import Submithandler from './redux/Answers/reducers'
export default combineReducers({
    Timerreducer,
    Submithandler

});
