import React from 'react';

import TableHeaderRow from './table-header-row';

class TableHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.tableHeader = {
      setState: this.setState,
      getState: this.getState,
      getTable: () => props.table
    };
  }

  getState() {
    return this.state;
  }

  render() {
    const array = [...Array(this.props.getHeaderRowCount())]
    const tableHeaderRows = array.map((_, rowIdx) => {
      return (
        <TableHeaderRow
          key={`col-row-${rowIdx}`}
          rowIdx={rowIdx}
          tableHeader={this.tableHeader}
          getHeaderCellCount={this.props.getHeaderCellCount}
          renderTableHeaderRow={this.props.renderTableHeaderRow}
          renderTableHeaderCell={this.props.renderTableHeaderCell}
        />
      );
    });
    return this.props.renderTableHeader(tableHeaderRows, this.tableHeader);
  }
}
export default TableHeader;
