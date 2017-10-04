import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './table-row';

class TableBody extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};
    this.tableRows = {};

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setTableRow = this.setTableRow.bind(this);
    this.getTableRow = this.getTableRow.bind(this);
    this.getTableCell = this.getTableCell.bind(this);

    this.tableBody = {
      setState: this.setState,
      getState: this.getState,
      getTable: () => props.table,
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      getTableRow: this.getTableRow,
      getTableCell: this.getTableCell
    };

    this.props.setTableBody(this.tableBody);
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

  setTableRow(rowIdx, tableRow) {
    this.tableRows[rowIdx] = tableRow;
  }

  getTableRow(rowIdx) {
    return this.tableRows[rowIdx];
  }

  getTableCell(rowIdx, colIdx) {
    return this.getTableRow(rowIdx).getTableCell(colIdx);
  }

  render() {
    const array = [...Array(this.props.getDataRowCount())];
    const tableRows = array.map((_, rowIdx) => {
      return (
        <TableRow
          key={`data-row-${rowIdx}`}
          rowIdx={rowIdx}
          tableBody={this.tableBody}
          setTableRow={this.setTableRow}
          getDataCellCount={this.props.getDataCellCount}
          renderTableRow={this.props.renderTableRow}
          renderTableCell={this.props.renderTableCell}
        />
      );
    });
    return this.props.renderTableBody(tableRows, this.tableBody);
  }
}

TableBody.propTypes = {
  table: PropTypes.object,
  setTableBody: PropTypes.func,
  getDataRowCount: PropTypes.func,
  getDataCellCount: PropTypes.func,
  renderTableBody: PropTypes.func,
  renderTableRow: PropTypes.func,
  renderTableCell: PropTypes.func
};

export default TableBody;
