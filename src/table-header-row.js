import React from 'react';
import PropTypes from 'prop-types';

import TableHeaderCell from './table-header-cell';

class TableHeaderRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};
    this.tableHeaderCells = {};

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setTableHeaderCell = this.setTableHeaderCell.bind(this);
    this.getTableHeaderCell = this.getTableHeaderCell.bind(this);

    this.tableHeaderRow = {
      setState: this.setState,
      getState: this.getState,
      getTableHeader: () => props.tableHeader,
      getTable: () => props.tableHeader.getTable(),
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      getTableHeaderCell: this.getTableHeaderCell,
      rowIdx: props.rowIdx
    };

    this.props.setTableHeaderRow(this.props.rowIdx, this.tableHeaderRow);
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

  setTableHeaderCell(colIdx, tableHeaderCell) {
    this.tableHeaderCells[colIdx] = tableHeaderCell;
  }

  getTableHeaderCell(colIdx) {
    return this.tableHeaderCells[colIdx];
  }

  render() {
    const rowIdx = this.props.rowIdx;
    const array = [...Array(this.props.getHeaderCellCount(rowIdx))];
    const tableHeaderCells = array.map((_, colIdx) => {
      return (
        <TableHeaderCell
          key={`col-cell-${rowIdx}${colIdx}`}
          rowIdx={rowIdx}
          colIdx={colIdx}
          tableHeaderRow={this.tableHeaderRow}
          setTableHeaderCell={this.setTableHeaderCell}
          renderTableHeaderCell={this.props.renderTableHeaderCell}
        />
      );
    });
    return this.props.renderTableHeaderRow(rowIdx, tableHeaderCells, this.tableHeaderRow);
  }
}

TableHeaderRow.propTypes = {
  rowIdx: PropTypes.number,
  tableHeader: PropTypes.object,
  setTableHeaderRow: PropTypes.func,
  getHeaderCellCount: PropTypes.func,
  renderTableHeaderRow: PropTypes.func,
  renderTableHeaderCell: PropTypes.func,
};

export default TableHeaderRow;
