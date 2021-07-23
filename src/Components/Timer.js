import React from "react";
import "./Timer.css";
import { Card } from "antd";
import { ClockCircleTwoTone,SyncOutlined } from "@ant-design/icons";

export default function Timer(props) {

  return (
    <div className="timer">
        
      {/* <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span> */}
      <span className="digits">
        {15-("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
      
      {/* <span className="digits mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span> */}
      
    </div>
  );
}