import React from 'react';

import TableHeaderCell from './table-header-cell';

class TableHeaderRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.tableHeaderRow = {
      setState: this.setState,
      getState: this.getState,
      getTableHeader: () => props.tableHeader,
      getTable: () => props.tableHeader.getTable()
    };
  }

  getState() {
    return this.state;
  }

  render() {
    const rowIdx = this.props.rowIdx;
    const array = [...Array(this.props.getHeaderCellCount(rowIdx))];
    const tableHeaderCells = array.map((_, colIdx) => {
      return (
        <TableHeaderCell
          key={`col-cell-${rowIdx}${colIdx}`}
          tableHeaderRow={this.tableHeaderRow}
          rowIdx={rowIdx}
          colIdx={colIdx}
          renderTableHeaderCell={this.props.renderTableHeaderCell}
        />
      );
    });
    return this.props.renderTableHeaderRow(rowIdx, tableHeaderCells, this.tableHeaderRow);
  }

}
export default TableHeaderRow;
