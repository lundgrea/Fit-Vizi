import React from 'react';

export const BestDisplay = (props) => {
  console.log(props)
  return (
    <>
    <h2>Best Average Power Outputs</h2>
    <p>1 Minute: {props.data.topOne.averagePower}</p>
    <p>5 Minutes: {props.data.topFive.averagePower}</p>
    <p>10 Minutes: {props.data.topTen.averagePower}</p>
    <p>15 Minutes: {props.data.topFifteen.averagePower}</p>
    <p>20 Minutes: {props.data.topTwenty.averagePower}</p>
    </>
  )
}

export default BestDisplay