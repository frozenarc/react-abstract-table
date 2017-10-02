# react-abstract-table
Abstract table to extend whatever way

The abstract table still needs below implementation to make itself concrete. The table is flexible enough to accept independent implementation of each.

Rendering: You can use any kind of element or library to render like `<td>`, `<div>`, semantic-ui-react, bootstrap etc.

Data management: The table needs data in some format to represent. Here you can define in any format.

Event handling: Any kind of event from any component can be fired and you can decide which level of rendering you need for that event.

State management: You can decide which component should contain which kind of state to change that state by any events.

`Rendering` and `Data structure` would be direct sub-module of the module. So, let's see how we can achieve rendering.

### Rendering

There are seven callback functions we need to pass to the `Table` component to achieve rendering.

```Javascript
const renderTable = (children, table) => {
  //return table element with "children" and manange state of table using "table" object
};

const renderTableBody = (children, tableBody) => {
  //return table body element with "children" and manange state of table body or parents using "tableBody" object
};

const renderTableRow = (rowIdx, children, tableRow) => {
  //return table row element at "rowIdx" with "children" and manange state of table row or parents using "tableRow" object
};

const renderTableCell = (rowIdx, colIdx, tableCell) => {
  //return table cell element at "rowIdx" and "colIdx" and manange state of table cell or parents using "tableCell" object
};

const renderTableHeader = (children, tableHeader) => {
  //return table header element with "children" and manange state of table header or parents using "tableHeader" object
};

const renderTableHeaderRow = (rowIdx, children, tabl0eHeaderRow) => {
  //return table header row element at "rowIdx" with "children" and manange state of table header row or parents using "tableHeaderRow" object
};

const renderTableHeaderCell = (rowIdx, colIdx, tableHeaderCell) => {
  //return table header cell element at "rowIdx" and "colIdx" and manange state of table header cell or parents using "tableHeaderCell" object
};
```

### Data management

There are four callback functions we need to pass to the `Table` component to manage data. `Data management` is direct sub-module but still it is a sub-module of `Rendering` too. Because `react-abstract-table` module just needs row count, column count of body and header. Getting header value and data value would be initiated from `Rendering`.

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
