import React, { useState } from "react";
import "./StopWatch.css";
import Timer from "./Timer";
import ControlButtons from "./controlbutton";
import { useDispatch, useSelector } from 'react-redux';
import switcher from '../redux/Timer/actions'
import { ClockCircleTwoTone,SyncOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { ReactComponent as YourSvg } from './clock.svg';

import { Skiptheoption } from "../redux/Answers/Submit.utils";
const {swtichtheTimerON,swtichtheTimerFF}=switcher

function StopWatch({currentQues,stopIT}) {
const [isActive, setIsActive] = useState(true);
const [isPaused, setIsPaused] = useState(false);
const [currq, setcurrq] = useState(currentQues);

const switcherstatus = useSelector((state) => state.Timerreducer.switch);



const [time, setTime] = useState(0);
const dispatch = useDispatch();

if (stopIT==true){
    setIsPaused(true)
}




React.useEffect(() => {
    if(switcherstatus=='yes'){
        setTime(0)
        // dispatch(swtichtheTimerFF())
        }

     if(switcherstatus=='reset'){
            setTime(0)
            dispatch(swtichtheTimerFF())

            // dispatch(swtichtheTimerFF())
        }
	
}, [switcherstatus]);





const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

React.useEffect(() => {
    let interval = null;
	if ( time<10000) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
        
    clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isPaused]);

if (time>15000)
{
    dispatch(swtichtheTimerON())
    setTime(0)

}







const handleReset = () => {
	setIsActive(true);
	setTime(0);
};

return (
	<div className="stop-watch" style={{marginTop:'5vh',borderRadius:'25px',backgroundColor:'#80dfff',marginLeft:'50vw',height:'60vh'}}>
	<Timer time={time} />
    <Card style={{marginBottom:'20vh'}}>
        <YourSvg height='20vh' width='20vh'>
       
    </YourSvg>
    </Card>
	</div>
);
}

export default StopWatch;
