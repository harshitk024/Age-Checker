import { useEffect, useState } from "react";
import "./App.css";
import BirthDateInput from "./Components/BirthdayForm";
import Age from "./Components/Age";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ageSeconds, setAgeSeconds] = useState(0);
  useEffect(() => {
    setAgeSeconds(
      parseInt(
        (new Date().getTime() -
          (selectedDate?.getTime() ?? new Date().getTime())) /
          1000
      )
    );
    const intervalId = setInterval(() => {
      setAgeSeconds((sec) => sec + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [selectedDate?.getTime()]);

  return (
    <div className="center-contents">
      <div id="contents">
        <h2 className="header"> Enter your birthday </h2>
        <BirthDateInput
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <hr className="p-3" />
        <Age ageSeconds={ageSeconds} />
      </div>
    </div>
  );
};

export default App;
