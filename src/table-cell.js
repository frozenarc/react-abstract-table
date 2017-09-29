import React from 'react';

class TableCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.tableCell = {
      setState: this.setState,
      getState: this.getState,
      getTableRow: () => props.tableRow,
      getTableBody: () => props.tableRow.getTableBody(),
      getTable: () => props.tableRow.getTableBody().getTable()
    };
  }

  getState() {
    return this.state;
  }

  render() {
    const rowIdx = this.props.rowIdx;
    const colIdx = this.props.colIdx;
    return this.props.renderTableCell(rowIdx, colIdx, this.tableCell);
  }
}
export default TableCell;
