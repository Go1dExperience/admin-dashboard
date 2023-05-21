import React from "react";
import ReactDOM from "react-dom";
import { Table } from "./atoms/Table";
import "./index.css";
import ChartSummary from "./organisms/ChartSummary";
import SwipeableTemporaryDrawer from "./organisms/SidebarMenu";

const App = () => {
  return (
    <div className='container'>
      <SwipeableTemporaryDrawer />
      <ChartSummary />
      <Table />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
