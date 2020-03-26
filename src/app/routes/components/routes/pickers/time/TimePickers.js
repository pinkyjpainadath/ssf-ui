import React, {useState} from 'react';
import {TimePicker} from '@material-ui/pickers';

const TimePickers =()=> {
  const [selectedDate, handleDateChange] = useState(new Date());
    return (<div key="basic_time" className="picker">

      <TimePicker
        fullWidth
        value={selectedDate}
        onChange={(date)=>handleDateChange(date)}
      />
    </div>)
  };

export default TimePickers;
