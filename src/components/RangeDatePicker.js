import React, {Component} from "react"
import DayPicker, {DateUtils} from "react-day-picker"

import "react-day-picker/lib/style.css"

export default class RangeDatePicker extends Component {
    //зачем этот конструктор?
    constructor(props) {
        super(props)
    }
    state = {
        from: null,
        to: null
    }
    render() {
        const {from, to} = this.state;
        return (
            <div className="RangeExample">
                {!from && !to && <p>Выберите <strong>первый день</strong>.</p>}
                {from && !to && <p>Выберите <strong>последний день</strong>.</p>}
                {from && to && <p>
                    Вы выбрали период от {from.toLocaleDateString()} до {to.toLocaleDateString()}. {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[
                    from, {
                        from,
                        to
                    }
                ]}
                    onDayClick={this.handleDayClick}/>
            </div>
        )
    }
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick = ev => {
        ev.preventDefault();
        this.setState({from: null, to: null});
    }
}
