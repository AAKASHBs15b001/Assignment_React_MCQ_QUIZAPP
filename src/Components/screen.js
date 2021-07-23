// import Header from './Components/Header'
import { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import questions from '../Questions'
import {Row,Col} from 'react-bootstrap'
import { Divider } from 'antd';
import { Card } from 'antd';
import { Button, Radio,Badge,Avatar } from 'antd';
import Countdown from 'react-countdown';
import StopWatch from './stopwatch'
import AnswersAction from '../redux/Answers/actions'
import { Skiptheoption } from "../redux/Answers/Submit.utils";
import switcher from '../redux/Timer/actions'
import Table from './ResultTable'
const {swtichtheTimerON,swtichtheTimerFF,ResetTimer}=switcher
function Screen() {
    const ansArr=useSelector((state) => state.Submithandler.Answers)
    const [Answrshow,setAnswrshow]=useState(ansArr)
    
  const {submittheAnswer,skiptheAnswer}=AnswersAction
  const [timerswitcher,settimerswitcher]=useState(false)

  const [selected_option,set_selected_option]=useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const[attempts,setattempts]=useState([0,0,0,0])

  const dispatch = useDispatch();
const switcherstatus = useSelector((state) => state.Timerreducer.switch);

  const [isActive, setIsActive] = useState(true);
const [isPaused, setIsPaused] = useState(false);
const [time, setTime] = useState(0);






  
// var i = setInterval(function() {
//  console.log('hskskhksh')
// }, 500);
// if(showScore)(function(){
//   clearInterval(i);
// });
  // useInterval(handleAnswerOptionClick(false), 100000, 5);

  

  const handleclickoption = (option) => {
		set_selected_option(option)
  };


// var Countdown=(<h1>loding</h1>)
//   useEffect(()=>{

//   },[currentQuestion])


const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};

  const handlesubmit = () => {
    setAnswrshow(ansArr)
    const arr=attempts
    arr[currentQuestion]=selected_option
    setattempts(arr)
    set_selected_option('')
    setCurrentQuestion(currentQuestion+1)
    dispatch(submittheAnswer(currentQuestion,selected_option))
    dispatch(ResetTimer())

    // dispatch(swtichtheTimerON())

  };


  const handleskip = () => {
    const arr=attempts
    arr[currentQuestion]='NA'
    setattempts(arr)
    set_selected_option('')
    setCurrentQuestion(currentQuestion+1)
    dispatch(skiptheAnswer(currentQuestion))
    dispatch(ResetTimer())

};



useEffect(() => {
    if(switcherstatus=='yes'){
        handleskip()

    }
	
}, [switcherstatus]);





useEffect(() => {
   
	
}, [Answrshow]);





  
  



  
  



  return (

		<div className='app'>
     

  





<div>
{currentQuestion<8?
<div style={{borderStyle:'solid',border:'solid 0.1px gray',marginLeft:'2vh',marginTop:'2vh'}}>




      <Row>

      
      <Col md={6}>
			  
				<>
        <Divider>
					<div className='question-section'>
          
						<div className='question-count' >
            <Card   style={{marginBottom:'2vh',borderRadius:'25px',textAlign:'center',marginTop:'3vh',marginLeft:'3vh',color:'black',backgroundColor:'#99e6e6',width:'10vw'}}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
              </Card>
						</div>
						<Card style={{width:'40vw',marginBottom:'2vh',borderRadius:'25px',textAlign:'left',marginLeft:'3vh',color:'black',backgroundColor:'#ccffff'}}>
           
              <div className='question-text'>{!showScore?questions[currentQuestion].questionText:''}</div></Card>
					</div>
         </Divider>
					<div className='answer-section'>
          <Row >

						{questions[currentQuestion].answerOptions.map((answerOption) => (
              
                <Col md={12}>
                  <Card style={{marginBottom:'3vh',marginLeft:'3vh'}}>
                    <Button type="primary"  style={{marginBottom:'3vh',marginRight:'1vh'}} >{answerOption.option}</Button>
                    
                    {answerOption.option===selected_option?<Button style={{borderRadius:'25px',backgroundColor:'#80dfff',color:'Blue'}} type="primary" bordered='false' onClick={() => handleclickoption(answerOption.option)} shape="round" >{answerOption.answerText}</Button> :<Button style={{borderRadius:'25px',backgroundColor:'#80dfff',color:'black'}} type="primary" bordered='false' onClick={() => handleclickoption(answerOption.option)} shape="round"  >
                  {answerOption.answerText}
        </Button>
}
                  
							{/* <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> */}
              
              </Card>
              </Col>

						))}
            
             </Row>
            
             
					</div>
				</>
			)
      
      </Col>


  <Col md={3} ><StopWatch></StopWatch></Col>
     

       
      
      </Row>

<Card style={{marginBottom:'2vh'}}>
      <Row>
        <Col md={6} >
            <div style={{textAlign:'center'}}>
            
          <Button style={{width:'15vw',borderRadius:'22px',backgroundColor:'#80dfff'}} onClick={handlesubmit}>submit</Button>
          </div>
          </Col>
          <Col  md={6}>
          <div style={{textAlign:'center'}}>
          <Button style={{width:'15vw',borderRadius:'22px',backgroundColor:'#80ffff'}} onClick={handleskip}>Skip</Button>
          </div>
          </Col>
        

      </Row> </Card></div>:


      <Table Answers={Answrshow}></Table>}

      </div>




		</div>)
    
}

export default Screen;
