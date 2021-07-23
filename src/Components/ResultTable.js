// import Header from './Components/Header'
import { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import questions from '../Questions'
import {Row,Col} from 'react-bootstrap'
import { Card } from 'antd';
import { Button, Radio,Badge,Avatar } from 'antd';
import {  CheckCircleTwoTone,CheckCircleFilled,CloseCircleFilled } from '@ant-design/icons';



function Table({Answers}) {

    const ansARR = useSelector((state) => state.Submithandler.Answers);
     let divi;
     let score=0
    //  const [score,setscore]=useState(0)


    questions.map(question=>{
        const ans=question.answerOptions.find(optiona=>optiona['isCorrect']===true).option
        const Quesno=question.QuesNo
        const Attempted_answer=ansARR[Quesno-1]

        if(ans==Attempted_answer){score+=1}
    })












    return(

        
       
<Card style={{borderRadius:'25px',marginLeft:'10vw',marginRight:'2vw',marginTop:'5vh',backgroundColor:' #4dd2ff'}}>
        <Row>
        {
        
        
        
       
        
        questions.map(question=>{
        const ans=question.answerOptions.find(optiona=>optiona['isCorrect']===true).option
            return (<Col>
            <Card style={{textAlign:'center',borderRadius:'22px',widht:'15vw',height:'10vh',marginLeft:'2vw',marginRight:'2vw',marginTop:'5vh',marginBottom:'5vh',backgroundColor:'#80dfff'}}>
                <Card style={{backgroundColor:'white'}}>Question:{question.QuesNo}</Card>
                <Card height='20vh'>{ansARR[question.QuesNo-1]==='NA'||ansARR[question.QuesNo-1]==' '?'NA':ansARR[question.QuesNo-1]===ans?<CheckCircleFilled style={{height: '1000px',color: '#0000b3'}}/>:    <CloseCircleFilled  style={{color: ' #ff3300'}}/>
}</Card>
            </Card>
            </Col>)
})}
        </Row>
        <Card style={{backgroundColor:'blue',color:'white'}}>
        <h3 >Score:{score}</h3>
        </Card>
        
        </Card>
       
        
        
        
        
    )

  
    
}

export default Table;
