import React from 'react';
import moment from 'moment'
import PropTypes from "prop-types";

import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { Typography } from "@material-ui/core";

import CustomBodyOfMonth from "../CustomBodyOfMonth";

import { STATUS } from '../../constants'
import TermsNewVersion from "../../views/TermsNewVersion/TermsNewVersion";
import { getWeddingWithStatus } from "../../utilities";


const howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

const Months = (props) => {
  const {classes, terms, weddingAmount} = props;

  const getMonthsDays = (days) => (
    days.map((day) => <CustomBodyOfMonth key={day.day} {...day} />)
  );

  const getMonthWeddings = (date, monthNumber) => {
    return moment(date).format("MM") === monthNumber;
  };

  const getYearTermsSortedByMonth = (terms) => {
    let months = [
      {name: 'styczeń', terms: []},
      {name: 'luty', terms: []},
      {name: 'marzec', terms: []},
      {name: 'kwiecien', terms: []},
      {name: 'maj', terms: []},
      {name: 'czerwiec', terms: []},
      {name: 'lipiec', terms: []},
      {name: 'sierpien', terms: []},
      {name: 'wrzesien', terms: []},
      {name: 'pazdziernik', terms: []},
      {name: 'listopad', terms: []},
      {name: 'grudzien', terms: []},
    ]

    terms.map((term) => {
      const weddingDateMonth = moment(term.weddingDate).format("MM");

      switch (weddingDateMonth) {
        case "01":
          months[0].terms.push(term)
          break;
        case "02":
          months[1].terms.push(term)
          break;
        case "03":
          months[2].terms.push(term)
          break;
        case "04":
          months[3].terms.push(term)
          break;
        case "05":
          months[4].terms.push(term)
          break;
        case "06":
          months[5].terms.push(term)
          break;
        case "07":
          months[6].terms.push(term)
          break;
        case "08":
          months[7].terms.push(term)
          break;
        case "09":
          months[8].terms.push(term)
          break;
        case "10":
          months[9].terms.push(term)
          break;
        case "11":
          months[10].terms.push(term)
          break;
        case "12":
          months[11].terms.push(term)
          break;
      }
    })

    return months
  }


  const getMonths = (terms) => {
    const yearSortedByMonth = getYearTermsSortedByMonth(terms);

    const months = yearSortedByMonth.map((month, id) => {
      console.log('month', month)

      const weddingsAmount = month.terms.filter(function (term) {
        return getWeddingWithStatus(term, STATUS.BUSY)
      })

      return (
        <li key={month.name} className={classes.dayContainer}>
          <div className={classes.monthNameContainer}>
            <Typography className={classes.monthNumber}>{id + 1} </Typography>
            <CalendarViewDayIcon classes={{root: classes.icon}}/>
            <Typography className={classes.monthName}>{month.name}</Typography>
            <Typography className={classes.weddingsAmount}> ({weddingsAmount.length})</Typography>
          </div>
          {/*{getMonthsDays(month.days)}*/}
        </li>
      )
    })

    return months
  };

  return (
    <ul className={classes.monthContainer}>
      Ilość wesel: {weddingAmount}
      {getMonths(terms)}
    </ul>
  )
};


Months.propTypes = {
  classes: PropTypes.object.isRequired,
  terms: PropTypes.array.isRequired,
};

Months.displayName = 'Months';


export default Months;

