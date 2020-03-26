import React, {useState} from 'react';
import {DateTimePicker} from '@material-ui/pickers';

const DateAndTimePickers =()=> {
  const [selectedDate,setSelectedDate]=useState(new Date());

    return (
      <div key="datetime_default" className="picker">
        <DateTimePicker
          fullWidth
          value={selectedDate}
          showTabs={false}
          onChange={(date)=>setSelectedDate(date)}
          leftArrowIcon={<i className="zmdi zmdi-arrow-back"/>}
          rightArrowIcon={<i className="zmdi zmdi-arrow-forward"/>}
        />
      </div>);
};

export default DateAndTimePickers;
