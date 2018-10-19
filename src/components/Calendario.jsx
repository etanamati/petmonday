import React from 'react';
import ReactWeeklyDayPicker from 'react-weekly-day-picker';
import PropTypes from 'prop-types';

const Calendario = (props) => {
  
  const {handleSelectDay, selectedDay} = props;
  return (
    // TODO - Criar component proprio
    <ReactWeeklyDayPicker
      selectedDays={[selectedDay]}
      startDay={new Date()}
      selectDay={handleSelectDay}
      unselectable={false}
      unavailableText=" "
      todayText=" "
      multipleDaySelect={false}
      unavailables={{
        weekly: [0] //unavailable dates list for each week (0:Sunday, 1:Monday ...)
      }}
      />
  )
}

Calendario.propTypes = {
  handleSelectDay: PropTypes.func
}

Calendario.defaultProps  = {
  selectedDay: new Date()
}

export default Calendario;
