import React from 'react';

import TableCell from './table-cell';

class TableRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.tableRow = {
      setState: this.setState,
      getState: this.getState,
      getTableBody: () => props.tableBody,
      getTable: () => props.tableBody.getTable()
    };
  }

  getState() {
    return this.state;
  }

  render() {
    const rowIdx = this.props.rowIdx;
    const array = [...Array(this.props.getDataCellCount(rowIdx))];
    const tableCells = array.map((_, colIdx) => {
      return (
        <TableCell
          key={`data-cell-${rowIdx}${colIdx}`}
          tableRow={this.tableRow}
          rowIdx={rowIdx}
          colIdx={colIdx}
          renderTableCell={this.props.renderTableCell}
        />
      );
    });
    return this.props.renderTableRow(rowIdx, tableCells, this.tableRow);
  }
}
export default TableRow;
