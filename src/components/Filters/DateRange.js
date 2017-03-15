import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import {connect} from 'react-redux'
import {filterDate} from '../../AC/index'

class DateRange extends Component {

    handleDayClick = (day) => {
        //this.setState(DateUtils.addDayToRange(day, this.state))
        this.props.dispatchFilterDate(DateUtils.addDayToRange(day, this.props.filterDate))
    }

    render() {
        const { from, to } = this.props.filterDate;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect((state) => {
    return {filterDate: state.filter.filterDate}
}, {dispatchFilterDate: filterDate})(DateRange)