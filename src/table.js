import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './table-header';
import TableBody from './table-body';

class Table extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};
    this.tableHeader = null;
    this.tableBody = null;

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setTableHeader = this.setTableHeader.bind(this);
    this.getTableHeader = this.getTableHeader.bind(this);
    this.getTableHeaderRow = this.getTableHeaderRow.bind(this);
    this.getTableHeaderCell = this.getTableHeaderCell.bind(this);
    this.setTableBody = this.setTableBody.bind(this);
    this.getTableBody = this.getTableBody.bind(this);
    this.getTableRow = this.getTableRow.bind(this);
    this.getTableCell = this.getTableCell.bind(this);

    this.table = {
      setState: this.setState,
      getState: this.getState,
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      getTableHeader: this.getTableHeader,
      getTableHeaderRow: this.getTableHeaderRow,
      getTableHeaderCell: this.getTableHeaderCell,
      getTableBody: this.getTableBody,
      getTableRow: this.getTableRow,
      getTableCell: this.getTableCell
    };
  }

  getState() {
    return this.state;
  }

  setInfo(key, value) {
    this.info[key] = value;
  }

  getInfo(key) {
    return this.info[key];
  }

  setTableHeader(tableHeader) {
    this.tableHeader = tableHeader;
  }

  setTableBody(tableBody) {
    this.tableBody = tableBody;
  }

  getTableHeader() {
    return this.tableHeader;
  }

  getTableHeaderRow(rowIdx) {
    return this.getTableHeader().getTableHeaderRow(rowIdx);
  }

  getTableHeaderCell(rowIdx, colIdx) {
    return this.getTableHeader().getTableHeaderRow(rowIdx).getTableHeaderCell(colIdx);
  }

  getTableBody() {
    return this.tableBody;
  }

  getTableRow(rowIdx) {
    return this.getTableBody().getTableRow(rowIdx);
  }

  getTableCell(rowIdx, colIdx) {
    return this.getTableBody().getTableRow(rowIdx).getTableCell(colIdx);
  }

  render() {
    const tableHeader = <TableHeader
      key={'table-header'}
      table={this.table}
      setTableHeader={this.setTableHeader}
      getHeaderRowCount={this.props.getHeaderRowCount}
      getHeaderCellCount={this.props.getHeaderCellCount}
      renderTableHeader={this.props.renderTableHeader}
      renderTableHeaderRow={this.props.renderTableHeaderRow}
      renderTableHeaderCell={this.props.renderTableHeaderCell}
    />;
    const tableBody = <TableBody
      key={'table-body'}
      table={this.table}
      setTableBody={this.setTableBody}
      getDataRowCount={this.props.getDataRowCount}
      getDataCellCount={this.props.getDataCellCount}
      renderTableBody={this.props.renderTableBody}
      renderTableRow={this.props.renderTableRow}
      renderTableCell={this.props.renderTableCell}
    />;
    return this.props.renderTable([ tableHeader, tableBody ], this.table);
  }
}

Table.propTypes = {
  getDataRowCount: PropTypes.func,
  getDataCellCount: PropTypes.func,
  getHeaderRowCount: PropTypes.func,
  getHeaderCellCount: PropTypes.func,
  renderTable: PropTypes.func,
  renderTableBody: PropTypes.func,
  renderTableRow: PropTypes.func,
  renderTableCell: PropTypes.func,
  renderTableHeader: PropTypes.func,
  renderTableHeaderRow: PropTypes.func,
  renderTableHeaderCell: PropTypes.func
};

export default Table;
