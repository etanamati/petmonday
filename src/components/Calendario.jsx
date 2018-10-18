import React, {Component} from 'react';
import ReactWeeklyDayPicker from 'react-weekly-day-picker';
import moment from 'moment';

class Calendario extends Component {
  
  render(){
    console.log(moment.locale());
    console.log(moment().format('MMM D'));
    console.log(moment().format('ddd'));
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
