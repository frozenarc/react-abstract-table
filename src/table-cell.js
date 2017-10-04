import React from 'react';
import PropTypes from 'prop-types';

class TableCell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);

    this.tableCell = {
      setState: this.setState,
      getState: this.getState,
      getTableRow: () => props.tableRow,
      getTableBody: () => props.tableRow.getTableBody(),
      getTable: () => props.tableRow.getTableBody().getTable(),
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      rowIdx: props.rowIdx,
      colIdx: props.colIdx
    };

    this.props.setTableCell(this.props.colIdx, this.tableCell);
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

  render() {
    const rowIdx = this.props.rowIdx;
    const colIdx = this.props.colIdx;
    return this.props.renderTableCell(rowIdx, colIdx, this.tableCell);
  }
}

TableCell.propTypes = {
  tableRow: PropTypes.object,
  rowIdx: PropTypes.number,
  colIdx: PropTypes.number,
  setTableCell: PropTypes.func,
  renderTableCell: PropTypes.func
};

export default TableCell;
