import React from 'react';
import ReactDOM from 'react-dom';

import Table from '../src/index';

ReactDOM.render(
  <div>
    <div><h3>Click on table cell to render whole table again</h3></div>
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
      return <table tabIndex={0} ref={() => {
          console.log(table.getTableCell(2, 2).getInfo("test"));
        }} style={{ borderCollapse: "collapse" }}>{children}</table>;
    }}
    renderTableBody={(children, tableBody) => {
      return <tbody>{children}</tbody>;
    }}
    renderTableRow={(rowIdx, children, tableRow) => {
      return <tr>{children}</tr>;
    }}
    renderTableCell={(rowIdx, colIdx, tableCell) => {
      return (
        <td
          style={{
            border: "1px solid black",
            backgroundColor: (tableCell.getTable().getState().rowIdx === rowIdx
              && tableCell.getTable().getState().colIdx === colIdx
              && tableCell.getTable().getState().click ? "green" : "white")
          }}
          onClick={(e) => {
            tableCell.setInfo("test", "hello2");
            tableCell.getTable().setState({ rowIdx, colIdx, click: true })
          }}>
          Value{rowIdx}{colIdx}
        </td>
      );
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
  /></div>,
  document.getElementById('app'));
