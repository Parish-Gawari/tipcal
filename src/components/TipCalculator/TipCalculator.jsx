/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BillInput from "../BillInput/BillInput";
import CustomerName from "../CustomerName/CustomerName";
import CustomerOutput from "../CustomerOutput/CustomerOutput";
import styles from "./TipCalculator.module.css";

const TipCalculator = () => {
  const [list, setList] = useState([]);
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [name, setName] = useState("");

  const [totalTip, setTotaltip] = useState(0);

  const billHandler = (num) => setBill(num);
  const nameHandler = (cName) => setName(cName);
  const serviceHandler = (num) => setService(num);

  const btnHandler = () => {
    setList([...list, `Tip given by ${name} ${bill * service}`]);
    setTotaltip(totalTip + bill * service);
  };
  const [tip, setTip] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const calculateTipCustomer = () => {
    setTip(totalTip);
    setTotalCustomers(list.length);
  };

  return (
    <>
      <BillInput billchangeHandler={billHandler} />
      <CustomerName
        namechangeHandler={nameHandler}
        servicechangeHandler={serviceHandler}
        btnclickhandler={btnHandler}
      />
      <CustomerOutput customerList={list} />
      <center>
        <button className={styles.btn} onClick={calculateTipCustomer}>
          Calculate Total Tip
        </button>
      </center>
      <div className={styles.table} id="show">
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Total Customers</th>
              <th>Total Tip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>{totalCustomers}</td>
              <td>{tip}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TipCalculator;
