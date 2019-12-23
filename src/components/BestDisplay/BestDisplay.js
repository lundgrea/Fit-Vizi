import React from 'react';

export const BestDisplay = (props) => {
  return (
    <>
      <h2>Best Average Power Outputs</h2>
      <h4>1 Minute: {props.data.topOne.averagePower}</h4>
      <p>Record Began {props.data.topOne.startIndex} Seconds Into and Lasted 60 Seconds </p>
      <h4>5 Minutes: {props.data.topFive.averagePower}</h4>
      <p>Record Began {props.data.topFive.startIndex} Seconds Into and Lasted 5 Minutes</p>
      <h4>10 Minutes: {props.data.topTen.averagePower}</h4>
      <p>Record Began {props.data.topTen.startIndex} Seconds Into and Lasted 10 Minutes</p>
      <h4>15 Minutes: {props.data.topFifteen.averagePower}</h4>
      <p>Record Began {props.data.topFifteen.startIndex} Seconds Into and Lasted 15 Minutes</p>
      <h4>20 Minutes: {props.data.topTwenty.averagePower}</h4>
      <p>Record Began {props.data.topTwenty.startIndex} Seconds Into and Lasted 20 Minutes</p>
    </>
  )
}

export default BestDisplay