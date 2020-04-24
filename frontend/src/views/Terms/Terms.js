import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { YEAR_2020 } from '../../termsJSON/terminy2020';
import { YEAR_2021 } from '../../termsJSON/terminy2021';
import { YEAR_2022 } from '../../termsJSON/terminy2022';

import Months from "../../components/Months";
import TabPanel from "./TabPanel";
import { getReservations } from '../../services/reservationsService'


import { STATUS } from "../../constants";


const YEAR_2020_TITLE_TEXT = "2020";
const YEAR_2021_TITLE_TEXT = "2021";
const YEAR_2022_TITLE_TEXT = "2022";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

class Terms extends Component {
  state = {
    value: 0,
    date: [],
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
    const {value} = this.state;
    const years = [
      {
        name: YEAR_2020_TITLE_TEXT,
        details: YEAR_2020,
      },
      {
        name: YEAR_2021_TITLE_TEXT,
        details: YEAR_2021,
      },
      {
        name: YEAR_2022_TITLE_TEXT,
        details: YEAR_2022,
      }
    ];
    const getWeddingsYearAmount = (yearDetails) => {
      let allweeddings = 0;

      yearDetails.map((month) => {
        const weddingsAmount = month.days.filter(function (element) {
          return howMuchTermsWithStatus(element, STATUS.BUSY)
        });
        allweeddings = allweeddings + weddingsAmount.length;
      });

      return allweeddings
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
              <Months table={year.details} weddingAmount={weddingAmount}/>
            </TabPanel>
          )
        })}
      </div>
    )
  }
};


Terms.propTypes = {
  classes: PropTypes.object.isRequired,
};

Terms.displayName = 'Terms';

export default Terms;
