import React, { useState, useEffect } from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

const DatePickerr = ({ data }) => {
  const [selectDate, setDate] = useState(null);
  let [selectStartDate, setStartDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() - 7, 1)
  );
  let [selectEndDate, setEndDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() - 7, 31)
  );



  return (
    <div className="datep-header">
      <div className="dcont">
        <DateRangePickerComponent
          startDate={selectStartDate}
          endDate={selectEndDate}
          className="ds-cont"
          minDate={new Date(2021, 6, 1)}
          maxDate={new Date(2021, 6, 31)}
          format="Mmm dd yyyy"
        />
      </div>
      <h2 className="ds-container">Settings</h2>
    </div>
  );
};

export default DatePickerr;
