import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {

  const bank_limit = 10000
  return (
    <>
      <SliderComponent
        label= "Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        unit = "$"
        amount = {data.homeValue}
        onChange={(e, value) => setData({
          ...data,
          homeValue: value,
          downPayment: value*0.2,
          loanAmount: value*0.8
        })}
      />
      <SliderComponent
        label= "Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        unit = "$"
        amount = {data.downPayment}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value,
          loanAmount: (data.homeValue - value)
        })}
      />
      <SliderComponent
        label= "Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        unit = "$"
        amount = {data.loanAmount}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: value,
          downPayment: (data.homeValue - value)
        })}
      />
      <SliderComponent
        label= "Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value= {data.interestRate}
        step={0.5}
        unit = "%"
        amount = {data.interestRate}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
      />
    </>
  );
};

export default SliderSelect;
