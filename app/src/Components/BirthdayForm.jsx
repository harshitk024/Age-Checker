import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({selectedDate,setSelectedDate,handleSubmit}) {


  return (
    <div className="relative flex flex-col gap-4 p-4 bg-gray-100 rounded-md max-w-sm mx-auto">
      <label htmlFor="datepicker" className="text-lg font-medium">
        Enter your Birthday
      </label>


      <DatePicker
        selected={selectedDate}               
        onChange={(date) => setSelectedDate(date)} 
        placeholderText="MM/DD/YYYY"          
        dateFormat="MM/dd/yyyy"               
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        popperPlacement="top"        
      />
      <button onClick = {handleSubmit} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get the Age</button>
    </div>
  );
}

export default DateInput;

