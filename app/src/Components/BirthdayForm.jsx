import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function BirthDateInput({ selectedDate, setSelectedDate }) {
  return (
    <div className="relative rounded-md max-w-sm mx-auto">
      <DatePicker
        showIcon
        showTimeSelect
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="MM/DD/YYYY HH:MM:SS"
        dateFormat="MM/dd/yyyy HH:mm:ss"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        popperPlacement="top"
      />
    </div>
  );
}

export default BirthDateInput;
