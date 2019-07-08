import React, { Component, subDays } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css';


class WeeklyPagination extends Component {
    state = {
        date: new Date()
    };

    handleChange = date => this.setState({ date });

    render() {
        return (
            <ul className="weekly-pagination">
                <li>
                    <div id="calendar">
                        <DatePicker
                            className="this-week datepicker-here"
                            selected={this.state.date}
                            onChange={this.handleChange}
                            dateFormat="MMMM d, yyyy"
                            todayButton={"Bu həftə"}
                            calendarClassName='calendar'
                            dayClassName={date =>
                            (date.getFullYear() === this.state.date.getFullYear("yy")
                                && date.getDate() === this.state.date.getDate()
                                && date.getMonth() === this.state.date.getMonth()) ? "today" :
                                (date.getFullYear() === this.state.date.getFullYear("yy")
                                    && date.getMonth() !== this.state.date.getMonth()) ? "other-month" : "day"}
                        // withPortal
                        />
                    </div>
                </li>
            </ul>
        );
    }
}

export default WeeklyPagination;
