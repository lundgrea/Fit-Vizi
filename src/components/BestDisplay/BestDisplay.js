import React from 'react';

export const BestDisplay = (props) => {
  return (
    <>
      <h2>Best Average Power Outputs</h2>
      <h4>1 Minute: {props.topOne.averagePower}</h4>
      <p>Record Began {props.topOne.startIndex} Seconds Into and Lasted 60 Seconds </p>
      <h4>5 Minutes: {props.topFive.averagePower}</h4>
      <p>Record Began {props.topFive.startIndex} Seconds Into and Lasted 5 Minutes</p>
      <h4>10 Minutes: {props.topTen.averagePower}</h4>
      <p>Record Began {props.topTen.startIndex} Seconds Into and Lasted 10 Minutes</p>
      <h4>15 Minutes: {props.topFifteen.averagePower}</h4>
      <p>Record Began {props.topFifteen.startIndex} Seconds Into and Lasted 15 Minutes</p>
      <h4>20 Minutes: {props.topTwenty.averagePower}</h4>
      <p>Record Began {props.topTwenty.startIndex} Seconds Into and Lasted 20 Minutes</p>
    </>
  )
}

export default BestDisplay