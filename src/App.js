import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Provider } from 'react-redux';
// import AppProvider from './AppProvider';
import { store } from './store';

import { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import questions from './Questions'
import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import { Divider } from 'antd';
// import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Button, Radio,Badge,Avatar } from 'antd';
import Countdown from 'react-countdown';
import StopWatch from './Components/stopwatch'
import AnswersAction from './redux/Answers/actions'
import Screen from './Components/screen'
import Table from './Components/ResultTable'

function App() {
  
  



  return (

<Provider store={store}>
		<div className='app'>
      <Header></Header>
      <Row>
        <Col md={6}>
          <Card style={{marginRight:'5vw'}}>
      <Screen></Screen>
      </Card>
      </Col>
      </Row>
		</div></Provider>)
    
}

export default App;
