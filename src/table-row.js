import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './table-cell';

class TableRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};
    this.tableCells = {};

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setTableCell = this.setTableCell.bind(this);
    this.getTableCell = this.getTableCell.bind(this);

    this.tableRow = {
      setState: this.setState,
      getState: this.getState,
      getTableBody: () => props.tableBody,
      getTable: () => props.tableBody.getTable(),
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      getTableCell: this.getTableCell,
      rowIdx: props.rowIdx
    };

    this.props.setTableRow(this.props.rowIdx, this.tableRow);
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

  setTableCell(colIdx, tableCell) {
    this.tableCells[colIdx] = tableCell;
  }

  getTableCell(colIdx) {
    return this.tableCells[colIdx];
  }

  render() {
    const rowIdx = this.props.rowIdx;
    const array = [...Array(this.props.getDataCellCount(rowIdx))];
    const tableCells = array.map((_, colIdx) => {
      return (
        <TableCell
          key={`data-cell-${rowIdx}${colIdx}`}
          rowIdx={rowIdx}
          colIdx={colIdx}
          tableRow={this.tableRow}
          setTableCell={this.setTableCell}
          renderTableCell={this.props.renderTableCell}
        />
      );
    });
    return this.props.renderTableRow(rowIdx, tableCells, this.tableRow);
  }
}

TableRow.propTypes = {
  rowIdx: PropTypes.number,
  tableBody: PropTypes.object,
  setTableRow: PropTypes.func,
  getDataCellCount: PropTypes.func,
  renderTableRow: PropTypes.func,
  renderTableCell: PropTypes.func
};

export default TableRow;
