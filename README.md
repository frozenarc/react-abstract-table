# react-abstract-table
Abstract table to extend whatever way

### Quick demo

* [Basic demo](https://frozenarc.github.io/basic-demo.html)
* [Advanced demo](https://frozenarc.github.io/advanced-demo.html)

### Source Code of Advanced demo

* [react-abstract-table-demo-impl](https://github.com/frozenarc/react-abstract-table-demo-impl)

### Usage

`npm install --save react-abstract-table`

```Javascript
<Table
  getDataRowCount={getDataRowCount}
  getDataCellCount={getDataCellCount}
  getHeaderRowCount={getHeaderRowCount}
  getHeaderCellCount={getHeaderCellCount}
  renderTable={renderTable}
  renderTableBody={renderTableBody}
  renderTableRow={renderTableRow}
  renderTableCell={renderTableCell}
  renderTableHeader={renderTableHeader}
  renderTableHeaderRow={renderTableHeaderRow}
  renderTableHeaderCell={renderTableHeaderCell}
/>
```
Please go through below tutorial for detail of functions passed as props.

## Tutorial

The abstract table still needs below sub-modules to make itself concrete. The table is flexible enough to accept independent implementation of each.

Rendering: You can use any kind of element or library to render like `<td>`, `<div>`, semantic-ui-react, bootstrap etc.

Data management: The table needs data in some format to represent. Here you can define in any format.

Event handling: Any kind of event from any component can be fired and you can decide which level of rendering you need for that event.

State management: You can decide which component should contain which kind of state to change that state by any events.

`Rendering` and `Data structure` would be direct sub-module of the module.

### Rendering

There are seven callback functions we need to pass to `Table` component to achieve rendering.

#### Function

```Javascript
const renderTable = (children, table) => {
  //return table element with "children" and manange state of table using "table" object
};
```
#### Parameters

* children: Array containing table header and table body element to render as a children of table.
* table: Object with functions to get or set state of some component. The object has below functions.

##### Functions of `table`

* setState: `Table` component's setState.
* getState: returns state of table component.
* setInfo: Using key value pair you can preserve any info. e.g. `table.setInfo('key1', 'value1')`
* getInfo: Using key you can get preserved info. e.g. `table.getInfo('key1')`
* getTableHeader: returns `tableHeader` object. e.g. `table.getTableHeader()`
* getTableHeaderRow: returns `tableHeaderRow` object. e.g. `table.getTableHeaderRow(rowIdx)`
* getTableHeaderCell: returns `tableHeaderCell` object. e.g. `table.getTableHeaderCell(rowIdx, colIdx)`
* getTableBody: returns `tableBody` object. e.g. `table.getTableBody()`
* getTableRow: returns `tableRow` object. e.g. `table.getTableRow(rowIdx)`
* getTableCell: returns `tableCell` object. e.g. `table.getTableCell(rowIdx, colIdx)`

#### Function

```Javascript
const renderTableBody = (children, tableBody) => {
  //return table body element with "children" and manange state of table body or parents using "tableBody" object
};
```
#### Parameters

* children: table row elements to render as a children of table body.
* tableBody: The object has below functions.

##### Functions of `tableBody`

* setState: `TableBody` component's setState.
* getState: returns state of table body component.
* setInfo: Using key value pair you can preserve any info. e.g. `tableBody.setInfo('key1', 'value1')`
* getInfo: Using key you can get preserved info. e.g. `tableBody.getInfo('key1')`
* getTable: returns `table` object. e.g. `tableBody.getTable()`
* getTableRow: returns `tableRow` object. e.g. `tableBody.getTableRow(rowIdx)`
* getTableCell: returns `tableCell` object. e.g. `tableBody.getTableCell(rowIdx, colIdx)`

#### Function

```Javascript
const renderTableRow = (rowIdx, children, tableRow) => {
  //return table row element at "rowIdx" with "children" and manange state of table row or parents using "tableRow" object
};
```
#### Parameters

* rowIdx: Current row index of rendering row.
* children: table cell elements to render as a children of table row.
* tableRow: The object has below functions.

##### Functions of `tableRow`

* setState: `TableRow` component's setState.
* getState: returns state of table row component.
* setInfo: Using key value pair you can preserve any info. e.g. `tableRow.setInfo('key1', 'value1')`
* getInfo: Using key you can get preserved info. e.g. `tableRow.getInfo('key1')`
* getTableBody: returns `tableBody` object. e.g. `tableRow.getTableBody()`
* getTable: returns `table` object. e.g. `tableRow.getTable()`
* getTableCell: returns `tableCell` object. e.g. `tableRow.getTableCell(colIdx)`
* rowIdx: indicates row index for the object.

#### Function

```Javascript
const renderTableCell = (rowIdx, colIdx, tableCell) => {
  //return table cell element at "rowIdx" and "colIdx" and manange state of table cell or parents using "tableCell" object
};
```
#### Parameters

* rowIdx: Current row index of rendering cell.
* colIdx: Current column index of rendering cell.
* tableCell: The object has below functions.

##### Functions of `tableCell`

* setState: `TableCell` component's setState.
* getState: returns state of table cell component.
* setInfo: Using key value pair you can preserve any info. e.g. `tableCell.setInfo('key1', 'value1')`
* getInfo: Using key you can get preserved info. e.g. `tableCell.getInfo('key1')`
* getTableRow: returns `tableRow` object. e.g. `tableCell.getTableRow()`
* getTableBody: returns `tableBody` object. e.g. `tableCell.getTableBody()`
* getTable: returns `table` object. e.g. `tableCell.getTable()`
* rowIdx: indicates row index for the object.
* colIdx: indicated column index for the object.

#### Function

```Javascript
const renderTableHeader = (children, tableHeader) => {
  //return table header element with "children" and manange state of table header or parents using "tableHeader" object
};
```
#### Parameters

* children: table header row elements to render as a children of table header.
* tableHeader: The object has below functions.

##### Functions of `tableHeader`

* setState: `TableHeader` component's setState.
* getState: returns state of table header component.
* setInfo: Using key value pair you can preserve any info. e.g. `tableHeader.setInfo('key1', 'value1')`
* getInfo: Using key you can get preserved info. e.g. `tableHeader.getInfo('key1')`
* getTable: returns `table` object. e.g. `tableHeader.getTable()`
* getTableHeaderRow: returns `tableHeaderRow` object. e.g. `tableHeader.getTableHeaderRow(rowIdx)`
* getTableHeaderCell: returns `tableHeaderCell` object. e.g. `tableHeader.getTableHeaderCell(rowIdx, colIdx)`

#### Function

```Javascript
const renderTableHeaderRow = (rowIdx, children, tableHeaderRow) => {
  //return table header row element at "rowIdx" with "children" and manange state of table header row or parents using "tableHeaderRow" object
};
```
#### Parameters

* rowIdx: Current row index of rendering row.
* children: table header cell elements to render as a children of table header.
* tableHeaderRow: The object has below functions.

##### Functions of `tableHeaderRow`

* setState: `TableHeaderRow` component's setState.
* getState: returns state of table header row component.
* setInfo: Using key value pair you can preserve any info. e.g. `tableHeaderRow.setInfo('key1', 'value1')`
* getInfo: Using key you can get preserved info. e.g. `tableHeaderRow.getInfo('key1')`
* getTableHeader: returns `tableHeader`. e.g. `tableHeaderRow.getTableHeader()`
* getTable: returns `table` object. e.g. `tableHeaderRow.getTable()`
* getTableHeaderCell: returns `tableHeaderCell` object. e.g. `tableHeader.getTableHeaderCell(colIdx)`
* rowIdx: indicates row index for the object.

#### Function

```Javascript
const renderTableHeaderCell = (rowIdx, colIdx, tableHeaderCell) => {
  //return table header cell element at "rowIdx" and "colIdx" and manange state of table header cell or parents using "tableHeaderCell" object
};
```
#### Parameters

* rowIdx: Current row index of rendering cell.
* colIdx: Current column index of rendering cell.
* tableHeaderRow: The object has below functions.

##### Functions of `tableHeaderCell`

* setState: `TableHeaderCell` component's setState.
* getState: returns state of table header cell component.
* setInfo = Using key value pair you can preserve any info. e.g. `tableHeaderCell.setInfo('key1', 'value1')`
* getInfo = Using key you can get preserved info. e.g. `tableHeaderCell.getInfo('key1')`
* getTableHeaderRow: returns `tableHeaderRow` object. e.g. `tableHeaderCell.getTableHeaderRow()`
* getTableHeader: returns `tableHeader` object. e.g. `tableHeaderCell.getTableHeader()`
* getTable: returns `table` object. e.g. `tableHeaderCell.getTable()`
* rowIdx: indicates row index for the object.
* colIdx: indicated column index for the object.

#### Example of `setState`

Suppose we want to render only cell for some event occurred on that cell. We can do it this way.

```Javascript
const renderTableCell = (rowIdx, colIdx, tableCell) => {
  return (
    <td onClick={(e) => { tableCell.setState({ click: true }); }}>test_value</td>
  );
};
```

Now, if we want to render whole row on click event of cell.

```Javascript
const renderTableCell = (rowIdx, colIdx, tableCell) => {
  return (
    <td onClick={(e) => { tableCell.getTableRow().setState({ click: true }); }}>test_value</td>
  );
};
```

And same as to render whole table.

```Javascript
const renderTableCell = (rowIdx, colIdx, tableCell) => {
  return (
    <td onClick={(e) => { tableCell.getTable().setState({ click: true }); }}>test_value</td>
  );
};
```

### Data management

There are four callback functions we need to pass to `Table` component to manage data. `Data management` is direct sub-module but still it is a sub-module of `Rendering` too. Because `react-abstract-table` module just needs row count, column count of body and header. Getting header value and data value would be initiated from `Rendering`.

```Javascript
const getDataRowCount = () => {
  //return data row count of the table data
};

const getDataCellCount = (rowIdx) => {
  //return data cell count at given "rowIdx" of table data
};

const getHeaderRowCount = () => {
  //return header row count of the table header
};

const getHeaderCellCount = (rowIdx) => {
  //return header cell count at given "rowIdx" of table header
};
```

For more detail see [react-abstract-table-demo-impl](https://github.com/frozenarc/react-abstract-table-demo-impl)

### State management

It is a bunch of functions we need to define which can be called from any other three modules to check or set state. The functions should hide state structure.

### Event handling

It is a bunch of specific event handler for components like cell, row, table etc.
