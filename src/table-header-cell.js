import React from 'react';
import PropTypes from 'prop-types';

class TableHeaderCell extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);

    this.tableHeaderCell = {
      setState: this.setState,
      getState: this.getState,
      getTableHeaderRow: () => props.tableHeaderRow,
      getTableHeader: () => props.tableHeaderRow.getTableHeader(),
      getTable: () => props.tableHeaderRow.getTableHeader().getTable(),
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      rowIdx: props.rowIdx,
      colIdx: props.colIdx
    };

    this.props.setTableHeaderCell(this.props.colIdx, this.tableHeaderCell);
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
    return this.props.renderTableHeaderCell(rowIdx, colIdx, this.tableHeaderCell);
  }
}

TableHeaderCell.propTypes = {
  tableHeaderRow: PropTypes.object,
  rowIdx: PropTypes.number,
  colIdx: PropTypes.number,
  renderTableHeaderCell: PropTypes.func
};

export default TableHeaderCell;
