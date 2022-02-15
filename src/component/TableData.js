import React, { useState, useEffect } from "react";
import axios from "axios";

const TableData = ({ data }) => {
 

  let theadData =
    data && data.items
      ? data.items.map((val, i) => {
          return (
            <th key={i} className="th-container">
              {val}
            </th>
          );
        })
      : "";

  return (
    <div className="table-main">
      <table className="table-container">
        <thead className="tablehead-container">
          <tr className="tr-container">{theadData}</tr>
        </thead>
        <tbody>
          {data &&
            data.tabledata &&
            data.tabledata[0] &&
            data.tabledata[0].map((list, key) => {
              return (
                <tr key={key} className="tr-container">
                  {data &&
                    data.tabledata &&
                    data.tabledata
                      .slice(0, data.tabledata.length)
                      .map((item, id) => {
                        return (
                          <td key={id} className="td-container">
                            {item[key]}
                          </td>
                        );
                      })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
