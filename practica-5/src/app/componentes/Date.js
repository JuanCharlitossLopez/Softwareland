'use client';
import { useState } from "react";

export const DateInput = () => {
    // State to store the date value
    const [selectedDate, setSelectedDate] = useState('');
  
    // Function to handle date change
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
  
    return (
      <div>
        <label htmlFor="date">Select a date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    );
  };