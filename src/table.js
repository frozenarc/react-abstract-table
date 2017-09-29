import React from 'react';

import TableHeader from './table-header';
import TableBody from './table-body';

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.table = {
      setState: this.setState,
      getState: this.getState
    };
  }

  getState() {
    return this.state;
  }

  render() {
    const tableHeader = <TableHeader
      key={'table-header'}
      table={this.table}
      getHeaderRowCount={this.props.getHeaderRowCount}
      getHeaderCellCount={this.props.getHeaderCellCount}
      renderTableHeader={this.props.renderTableHeader}
      renderTableHeaderRow={this.props.renderTableHeaderRow}
      renderTableHeaderCell={this.props.renderTableHeaderCell}
    />;
    const tableBody = <TableBody
      key={'table-body'}
      table={this.table}
      getDataRowCount={this.props.getDataRowCount}
      getDataCellCount={this.props.getDataCellCount}
      renderTableBody={this.props.renderTableBody}
      renderTableRow={this.props.renderTableRow}
      renderTableCell={this.props.renderTableCell}
    />;
    return this.props.renderTable([ tableHeader, tableBody ], this.table);
  }
}

export default Table;
