
import React from 'react';

import ReactDataSheet from 'react-datasheet';
// Datasheet styles
import 'react-datasheet/lib/react-datasheet.css';

export default class AddForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      grid: [
        [
          {value: '12312312'}, {value: '12312312'}, {value: '12312312'}
        ],
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}],
        [{value: ''}, {value: ''}, {value: ''}],
      ]
    }
  }

   render() {
     return (
      <ReactDataSheet
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row]);
          changes.forEach(({row, col, value}) => {
            grid[row][col] = {...grid[row][col], value}
          });
          this.setState({grid});
        }}
      />
     );
   }
 }

