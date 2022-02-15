import React,{useState, useEffect} from 'react';
import axios from 'axios';
import DatePickerr from './DatePickerr';
import ColumnSelection from './ColumnSelection';
import TableData from './TableData'
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";



const Analytics = () => {
  const [data,setData] = useState(
    {items:["Date", "App","Clicks", "Ad Requests", "Ad Response", "Impression", "Revenue","Fill Rate","CTR"],
    tabledata: []
  }

  )


  useEffect(() =>{
    axios.get('https://go-dev.greedygame.com/v3/dummy/report?startDate=2021-07-01&endDate=2021-07-31').then(res => {
      setData({
        ...data,
        tabledata: [res.data.data.map((item)=> {return getDate(item.date)}),
          res.data.data.map((item)=> {return item.app_id}),
          res.data.data.map((item)=> {return item.clicks}),
          res.data.data.map((item)=> {return item.requests}),
          res.data.data.map((item)=> {return item.responses}),
          res.data.data.map((item)=> {return item.impressions}),
          res.data.data.map((item)=> {return item.revenue.toFixed(2)}),
          res.data.data.map((item)=> {return fillRate(item.requests,item.responses).toFixed(2) + "%"}),
          res.data.data.map((item)=> {return ctr(item.clicks,item.impressions).toFixed(2) + "%"}),

        ]
      })
  
    })
    .catch(error => {
      console.log(error);
    })
  },[]);

  // console.log(data);

  // console.log(data);
  // console.log(tableData);

  const fillRate = (adReq, adRes) =>{
    let val = (adReq/adRes)*100;
    return val
  }

  const ctr = (adClicks, adImpressions) => {
    let val = (adClicks / adImpressions) * 100;
    return val;
  }

  const getDate = (date) => {
    if (date !== undefined && date !== "") {
      let myDate = new Date(date);

      var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][myDate.getMonth()];

      let str = myDate.getDate() + " " + month + " " + myDate.getFullYear();
      return str;
    }
    return "";
  };

  
const onSortEnd = ({ oldIndex, newIndex }) =>{
    setData(({ items,tabledata }) => ({
        items: arrayMove(items, oldIndex, newIndex),
        tabledata: arrayMove(tabledata, oldIndex, newIndex)
  }));
}

const arrayMoveMutate = (array, from, to) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

const arrayMove = (array, from, to) => {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};


  return (
    <div className='main-contaier'>
      <h2>Analytics</h2>
      <DatePickerr data={data} ></DatePickerr>
      <ColumnSelection data={data} onSortEnd={onSortEnd}></ColumnSelection>
      <TableData data={data} getDate ={getDate}></TableData>
    </div>
  )
  
};

export default Analytics;
