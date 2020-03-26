import React, {useState} from 'react';
import {DateTimePicker} from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';

const CustomDateTimePicker =()=> {
  const [selectedDate,setSelectedDate]=useState(new Date());

    return (
      <div key="datetime_custom" className="picker">

      <DateTimePicker
        fullWidth
        error
        autoOk
        showTabs={false}
        autoSubmit={false}
        disableFuture
        value={selectedDate}
        onChange={(date)=>setSelectedDate(date)}
        helperText="Required"
        leftArrowIcon={<i className="zmdi zmdi-arrow-back"/>}
        rightArrowIcon={<i className="zmdi zmdi-arrow-forward"/>}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <i className="zmdi zmdi-alarm"/>
            </InputAdornment>
          ),
        }}
      />
    </div>)
};

export default CustomDateTimePicker
