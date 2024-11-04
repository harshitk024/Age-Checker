import { useState } from "react"
import "./App.css"
import Age from "./Components/Age"
import FormInput from "./Components/BirthdayForm";


function calculateAge(dob) {

  const currentDate = new Date();
  
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const birthYear = dob.getFullYear();
  const birthMonth = dob.getMonth() + 1;
  const birthDay = dob.getDate();

  let years = currentYear - birthYear;
  let months = currentMonth - birthMonth;
  let days = currentDay - birthDay;

  if (days < 0) {
    months -= 1;
    days += new Date(currentYear, currentMonth - 1, 0).getDate(); 
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}


const validator = (dob) => {

  const curr = new Date();


  if(dob.getFullYear() === curr.getFullYear()){

    if(dob.getMonth() === curr.getMonth()){

      if(dob.getDate() > curr.getDate()){
        alert("Enter valid date")
        return -1
      }
    }
  }

  if(dob.getFullYear() < 1900 || dob.getFullYear() > curr.getFullYear()){
    alert("Enter valid date")
    return -1
  }

  return 1

}



const App = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [age,setAge] = useState({years: 0,month:0})

  const [submitted,setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    if(validator(selectedDate) !== -1){

     setAge(calculateAge(selectedDate))
     console.log(calculateAge(selectedDate))

    }
  }

  return (
    <>
     <div id = "header">
       Get Your Age
     </div>
     <div id = "form-card" class = "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
       <FormInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleSubmit={handleSubmit} />
     </div>
     {submitted
     ? <Age age={age}/>
     : null}
     
    </>
  )
}

export default App