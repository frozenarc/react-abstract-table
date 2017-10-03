# react-abstract-table
Abstract table to extend whatever way

### Quick demo

* Clone this repo
* Run `npm install`
* Run `npm run start`

### Demo with advanced features

[react-abstract-table-demo-impl](https://github.com/frozenarc/react-abstract-table-demo-impl)

### Usage

`npm install --save react-abstract-table`

## Tutorial

The abstract table still needs below sub-modules to make itself concrete. The table is flexible enough to accept independent implementation of each.

Rendering: You can use any kind of element or library to render like `<td>`, `<div>`, semantic-ui-react, bootstrap etc.

Data management: The table needs data in some format to represent. Here you can define in any format.

Event handling: Any kind of event from any component can be fired and you can decide which level of rendering you need for that event.

State management: You can decide which component should contain which kind of state to change that state by any events.

`Rendering` and `Data structure` would be direct sub-module of the module. So, let's see how we can achieve rendering.

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

* setState: table component's setState.
* getState: returns state of table component.

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

* setState: table body component's setState.
* getState: returns state of table body component.
* getTable: returns `table` object to call `setState` or `getState` on it.

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

* setState: table row component's setState.
* getState: returns state of table row component.
* getTableBody: returns `tableBody` object to call `setState` or `getState` on it.
* getTable: returns `table` object to call `setState` or `getState` on it.

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

* setState: table cell component's setState.
* getState: returns state of table cell component.
* getTableRow: returns `tableRow` object to call `setState` or `getState` on it.
* getTableBody: returns `tableBody` object to call `setState` or `getState` on it.
* getTable: returns `table` object to call `setState` or `getState` on it.

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

* setState: table header component's setState.
* getState: returns state of table header component.
* getTable: returns `table` object to call `setState` or `getState` on it.

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

* setState: table header row component's setState.
* getState: returns state of table header row component.
* getTableHeader: returns `tableHeader` object to call `setState` or `getState` on it.
* getTable: returns `table` object to call `setState` or `getState` on it.

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

* setState: table header cell component's setState.
* getState: returns state of table header cell component.
* getTableHeaderRow: returns `tableHeaderRow` object to call `setState` or `getState` on it.
* getTableHeader: returns `tableHeader` object to call `setState` or `getState` on it.
* getTable: returns `table` object to call `setState` or `getState` on it.

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

### Example

Using above functions we can create `Table` component as below.

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

### Demo implementation of sub-module.

Go to [react-abstract-table-demo-impl](https://github.com/frozenarc/react-abstract-table-demo-impl) to check how we can create the sub-modules independent of each other
