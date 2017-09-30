import React from 'react';
import ReactDOM from 'react-dom';

import Table from '../src/index';

ReactDOM.render(
  <Table
    getDataRowCount={() => {
      return 5;
    }}
    getDataCellCount={(rowIdx) => {
      return 5;
    }}
    getHeaderRowCount={() => {
      return 1;
    }}
    getHeaderCellCount={(rowIdx) => {
      return 5;
    }}
    renderTable={(children, table) => {
      return <table border={"1"} style={{ borderCollapse: "collapse" }}>{children}</table>;
    }}
    renderTableBody={(children, tableBody) => {
      return <tbody>{children}</tbody>;
    }}
    renderTableRow={(rowIdx, children, tableRow) => {
      return <tr>{children}</tr>;
    }}
    renderTableCell={(rowIdx, colIdx, tableCell) => {
      return <td style={{ border: "1px solid black"}}>Value{rowIdx}{colIdx}</td>;
    }}
    renderTableHeader={(children, tableHeader) => {
      return <thead>{children}</thead>;
    }}
    renderTableHeaderRow={(rowIdx, children, tabl0eHeaderRow) => {
      return <tr>{children}</tr>;
    }}
    renderTableHeaderCell={(rowIdx, colIdx, tableHeaderCell) => {
      return <th style={{ border: "1px solid black"}}>Column{rowIdx}{colIdx}</th>;
    }}
  />,
  document.getElementById('app'));
