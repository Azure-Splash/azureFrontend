import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [selectedPool, setSelectedPool] = useState('Pool');
  const [selectedLane, setSelectedLane] = useState('Lane');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from localStorage when the component mounts
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    // Redirect to login if token is not present
    if (!storedToken) {
      // You can customize this behavior, e.g., redirect to login page
      window.location.href = '/loginorsignup';
    }
  }, []);

  const presetTimes = ['10:00', '12:00', '14:00', '16:00', '18:00'];
  const availablePools = ['Indoor Pool', 'Outdoor Pool']; // Add your pool options
  const availableLanes = ['lane1', 'lane2', 'lane3']; // Add your lane options

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handlePoolChange = (pool) => {
    setSelectedPool(pool);
  };

  const handleLaneChange = (lane) => {
    setSelectedLane(lane);
  };

  const handleBookingSubmit = async () => {
    try {
      const response = await fetch('https://azures-splash-8d7c939ebec7.herokuapp.com/bookings/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify({
          user: token,
          pool: selectedPool,
          time: selectedTime,
          date: date.toISOString(),
          lane: selectedLane,
        }),
      });

      if (response.ok) {
        const newBooking = await response.json();
        console.log('Booking successful:', newBooking);
        // Add any additional logic here, e.g., show a success message
      } else {
        console.error('Booking failed');
        // Add error handling logic here
      }
    } catch (error) {
      console.error('Error submitting booking', error);
      // Add error handling logic here
    }
  };

  return (
    <div className="booking-calendar-container">
      <h1>Booking Calendar</h1>
      <div className="centered-calendar">
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
        <label>Select Pool: </label>
        <select value={selectedPool} onChange={(e) => handlePoolChange(e.target.value)}>
          {availablePools.map((pool) => (
            <option key={pool} value={pool}>
              {pool}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Lane: </label>
        <select value={selectedLane} onChange={(e) => handleLaneChange(e.target.value)}>
          {availableLanes.map((lane) => (
            <option key={lane} value={lane}>
              {lane}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleBookingSubmit}>Submit Booking</button>
      </div>
      <div>
        <p>Selected Date: {date.toDateString()}</p>
        <p>Selected Time: {selectedTime}</p>
        <p>Selected Pool: {selectedPool}</p>
        <p>Selected Lane: {selectedLane}</p>
      </div>
    </div>
  );
}
