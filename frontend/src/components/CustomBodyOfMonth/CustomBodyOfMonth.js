import React, { useState } from 'react';
import classNames from 'classnames';
import moment from 'moment'

import Typography from '@material-ui/core/Typography';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import EventDateRange from '@material-ui/icons/DateRange';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import { STATUS, WEEK_DAY, WEEK_DAYS } from '../../constants'
import PropTypes from "prop-types";


const CustomBodyOfMonth = ({
                             classes,
                             day,
                             hotel,
                             information,
                             place,
                             status,
                             weddingHour,
                             weekDay,

                             weddingDate,
                             weddingStatus,
                             weddingAddress,
                           }) => {
  const classNameMain = classNames(classes.main, {
      [classes.busy]: status === STATUS.BUSY,
      [classes.holiday]: status === STATUS.HOLIDAY,
      [classes.emptyContainer]: status === STATUS.EMPTY || STATUS.UNDEFINED,
    }
  );

  const getView = (status) => {
    console.log('weddingStatus', weddingStatus)

    switch (status) {
      case STATUS.BUSY:
        return (<div className={classNames(classes.info, classes.infoBusy,)}>{weddingAddress}</div>);
      case STATUS.HOLIDAY:
        return (<div className={classNames(classes.info, classes.infoHoliday,)}>Wakacje</div>)
      case STATUS.RESERVATION:
        return (<div className={classNames(classes.info, classes.infoReservation,)}>Rezerwacja wstępna</div>)
    }
  };

  const getIcon = (status) => {
    switch (status) {
      case STATUS.BUSY:
        return <EventAvailableIcon classes={{root: classes.icon}}/>;
      case STATUS.EMPTY:
        return <CalendarTodayIcon classes={{root: classes.icon}}/>;
      case STATUS.HOLIDAY:
        return <EventBusyIcon classes={{root: classes.icon}}/>;
      case STATUS.RESERVATION:
        return <EventDateRange classes={{root: classes.icon}}/>;
    }
  };

  const getDetails = () => (
    <div className={classes.rowInfo}>
      {(status === STATUS.BUSY || status === STATUS.HOLIDAY) &&
      <div>
        {hotel && <Typography type={"p"} className={classes.details}><strong>hotel: </strong>{hotel}</Typography>}
        {weddingHour &&
        <Typography type={"p"} className={classes.details}><strong>godz. slubu: </strong>{weddingHour}</Typography>}
        {information &&
        <Typography type={"p"} className={classes.details}><strong>informacje dodatkowe: </strong>{information}
        </Typography>}
      </div>
      }
    </div>
  );

  const weekDayName = WEEK_DAYS[moment(weddingDate).day()];
  const dateFormat = moment(weddingDate).format("DD-MM-YYYY");

  return (
    <div className={classNameMain}>
      <div className={classes.rowContainer}>
        <div className={classes.detailsMainContainer}>
          <div className={classes.termIconContainer}>
            {getIcon(weddingStatus)}
            <Typography type={"span"} className={classes.day}>{dateFormat}</Typography>
            <Typography type={"p"} className={classes.details}>({weekDayName})</Typography>
          </div>
          {getDetails()}
        </div>
        <div className={classes.statusContainer}>{getView(weddingStatus)}</div>
      </div>
    </div>
  );
};

CustomBodyOfMonth.defaultProps = {
  day: '',
  description: '',
  hotel: '',
  information: '',
  place: '',
  status: '',
  weddingHour: '',
  weekDay: WEEK_DAY.SATUDRAY,
};

CustomBodyOfMonth.propTypes = {
  classes: PropTypes.object.isRequired,
  day: PropTypes.string,
  description: PropTypes.string,
  hotel: PropTypes.string,
  information: PropTypes.string,
  place: PropTypes.string,
  status: PropTypes.string,
  weddingHour: PropTypes.string,
  weekDay: PropTypes.string,
};

CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';

export default CustomBodyOfMonth;
