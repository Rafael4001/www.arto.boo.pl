import React from 'react';
import CustomBodyOfMonth from "../CustomBodyOfMonth";
import { Typography } from "@material-ui/core";
import CalendarToday from '@material-ui/icons/CalendarToday';

const Months = (props) => {
  const {classes, table} = props;

  const getMonthsDays = (days) => (
    days.map((day) => <CustomBodyOfMonth key={day.day} {...day} />)
  );

  const getMonths = (months) => (
    months.map((month) => (
      <li key={month.name} className={classes.dayContainer}>
        <Typography className={classes.monthName}><CalendarToday classes={{ root: classes.icon }}/>{month.name}</Typography>
        {getMonthsDays(month.days)}
      </li>
    ))
  );

  return (
    <ul className={classes.monthContainer}>
      {getMonths(table)}
    </ul>
  )
};

Months.defaultProps = {};

Months.displayName = 'Months';


export default Months;

