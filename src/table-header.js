import React from 'react';
import PropTypes from 'prop-types';

import TableHeaderRow from './table-header-row';

class TableHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.info = {};
    this.tableHeaderRows = {};

    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setTableHeaderRow = this.setTableHeaderRow.bind(this);
    this.getTableHeaderRow = this.getTableHeaderRow.bind(this);
    this.getTableHeaderCell = this.getTableHeaderCell.bind(this);

    this.tableHeader = {
      setState: this.setState,
      getState: this.getState,
      getTable: () => props.table,
      setInfo: this.setInfo,
      getInfo: this.getInfo,
      getTableHeaderRow: this.getTableHeaderRow,
      getTableHeaderCell: this.getTableHeaderCell
    };

    this.props.setTableHeader(this.tableHeader);
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

  setTableHeaderRow(rowIdx, tableRow) {
    this.tableHeaderRows[rowIdx] = tableRow;
  }

  getTableHeaderRow(rowIdx) {
    return this.tableHeaderRows[rowIdx];
  }

  getTableHeaderCell(rowIdx, colIdx) {
    return this.getTableHeaderRow(rowIdx).getTableHeaderCell(colIdx);
  }

  render() {
    const array = [...Array(this.props.getHeaderRowCount())]
    const tableHeaderRows = array.map((_, rowIdx) => {
      return (
        <TableHeaderRow
          key={`col-row-${rowIdx}`}
          rowIdx={rowIdx}
          setTableHeaderRow={this.setTableHeaderRow}
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

TableHeader.propTypes = {
  table: PropTypes.object,
  setTableHeader: PropTypes.func,
  getHeaderRowCount: PropTypes.func,
  getHeaderCellCount: PropTypes.func,
  renderTableHeader: PropTypes.func,
  renderTableHeaderRow: PropTypes.func,
  renderTableHeaderCell: PropTypes.func
};

export default TableHeader;
