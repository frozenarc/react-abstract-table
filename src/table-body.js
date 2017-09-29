import React from 'react';

import TableRow from './table-row';

class TableBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.tableBody = {
      setState: this.setState,
      getState: this.getState,
      getTable: () => props.table
    };
  }

  getState() {
    return this.state;
  }

  render() {
    const array = [...Array(this.props.getDataRowCount())];
    const tableRows = array.map((_, rowIdx) => {
      return (
        <TableRow
          key={`data-row-${rowIdx}`}
          rowIdx={rowIdx}
          tableBody={this.tableBody}
          getDataCellCount={this.props.getDataCellCount}
          renderTableRow={this.props.renderTableRow}
          renderTableCell={this.props.renderTableCell}
        />
      );
    });
    return this.props.renderTableBody(tableRows, this.tableBody);
  }

}
export default TableBody;
