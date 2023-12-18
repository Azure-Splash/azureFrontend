import {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import Footer from "../components/Footer";
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-time-picker/dist/TimePicker.css';


// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BookingPage() {
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('12:00');
    const presetTimes = ['10:00', '12:00', '14:00', '16:00', '18:00']; // Example of preset times
  
    const handleDateChange = (newDate) => {
      // Handle the selected date
      setDate(newDate);
    };
  
    const handleTimeChange = (newTime) => {
      // Handle the selected time
      setSelectedTime(newTime);
    }
  
    return (
        <div>
          <h1>Booking Calendar</h1>
          <div>
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          <div>
            <label>Select Time: </label>
            <select value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)}>
              {presetTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>Selected Date: {date.toDateString()}</p>
            <p>Selected Time: {selectedTime}</p>
          </div>
        </div>
      );
    }
    