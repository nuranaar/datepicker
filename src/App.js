import React from 'react';
import './App.css';

import WeeklyPagination from './DatePicker/DatePicker';

class App extends React.Component {

  render() {
    return (
      <div className="App App-header">
          <WeeklyPagination/>
        </div>
    )
  }
}

export default App;
