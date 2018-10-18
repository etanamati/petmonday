import React, {Component} from 'react';
import ReactWeeklyDayPicker from 'react-weekly-day-picker';

class Calendario extends Component {
  
  render(){
    const {handleSelectDay} = this.props;
    return (<ReactWeeklyDayPicker
      selectDay={handleSelectDay} 
      unavailableText=" "
      todayText=" "
      multipleDaySelect={false}
      format={'DD/MM/YYYY'}
      unavailables={{
        weekly: [0] //unavailable dates list for each week (0:Sunday, 1:Monday ...)
      }}
      />);
  }
}

export default Calendario;
