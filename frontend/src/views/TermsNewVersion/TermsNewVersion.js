import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import moment from 'moment'

import { YEAR_2020 } from '../../termsJSON/terminy2020';
import { YEAR_2021 } from '../../termsJSON/terminy2021';
import { YEAR_2022 } from '../../termsJSON/terminy2022';

import Months from "../../components/Months";
import TabPanel from "./TabPanel";
import { getReservations } from '../../services/reservationsService'
import { getWeddingWithStatus } from './../../utilities'

import { STATUS } from "../../constants";


const YEAR_2020_TITLE_TEXT = {title: "2020", year: "2020"};
const YEAR_2021_TITLE_TEXT = {title: "2021", year: "2021"};
const YEAR_2022_TITLE_TEXT = {title: "2022", year: "2022"};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const getYearWeddings = (element, year) => {
  return moment(element.weddingDate).format("YYYY") === year
};

class TermsNewVersion extends Component {
  state = {
    value: 0,
    data: [],
  };

  async componentDidMount() {
    const {data} = await getReservations();
    this.setState({
      data
    })
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };


  render() {
    const {classes} = this.props;
    const {value, data} = this.state;
    const years = [
      {
        name: YEAR_2020_TITLE_TEXT.title,
        details: data.filter(function (element) {
          return getYearWeddings(element, YEAR_2020_TITLE_TEXT.year)
        }),
      },
      {
        name: YEAR_2021_TITLE_TEXT.title,
        details: data.filter(function (element) {
          return getYearWeddings(element, YEAR_2021_TITLE_TEXT.year)
        }),
      },
      {
        name: YEAR_2022_TITLE_TEXT.title,
        details: data.filter(function (element) {
          return getYearWeddings(element, YEAR_2022_TITLE_TEXT.year)
        }),
      },
    ];
    const getWeddingsYearAmount = (yearDetails) => {

      const weddingsAmount = yearDetails.filter(function (element) {
        return getWeddingWithStatus(element, STATUS.BUSY)
      });

      return weddingsAmount.length
    };

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
            {years.map((year, id) => {
              const label = `${year.name}`;

              return (
                <Tab key={year.name} label={label} {...a11yProps(id)} />
              )
            })}
          </Tabs>
        </AppBar>

        {years.map((year, id) => {
          const weddingAmount = getWeddingsYearAmount(year.details);

          return (
            <TabPanel key={id} value={value} index={id}>
              <Months terms={year.details} weddingAmount={weddingAmount}/>
            </TabPanel>
          )
        })}
      </div>
    )
  }
};


TermsNewVersion.propTypes = {
  classes: PropTypes.object.isRequired,
};

TermsNewVersion.displayName = 'Terms';

export default TermsNewVersion;
