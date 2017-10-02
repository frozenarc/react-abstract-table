import React from 'react';
import PropTypes from 'prop-types';

class TableHeaderCell extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.tableHeaderCell = {
      setState: this.setState,
      getState: this.getState,
      getTableHeaderRow: () => props.tableHeaderRow,
      getTableHeader: () => props.tableHeaderRow.getTableHeader(),
      getTable: () => props.tableHeaderRow.getTableHeader().getTable()
    };
  }

  getState() {
    return this.state;
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
