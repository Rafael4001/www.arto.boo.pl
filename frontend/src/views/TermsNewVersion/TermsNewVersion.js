import React, { Component } from 'react';
import PropTypes from "prop-types";
import moment from 'moment'

import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Months from "../../components/Months";
import TabPanel from "./TabPanel";
import { deleteReservation, getReservations } from '../../services/reservationsService'
import { getWeddingWithStatus } from './../../utilities'

import { STATUS, YEARS_TODO } from "../../constants";


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
    passCustom: '',
  };

  loadDate = async () => {
    const {data} = await getReservations();
    this.setState({
      data
    })
  }

  async componentDidMount() {
    this.loadDate()
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };

  onDeleteTerm = async (id) => {
    await deleteReservation(id);
    await this.loadDate()
  };


  render() {
    const {classes} = this.props;
    const {value, data, passCustom} = this.state;
    const years = YEARS_TODO.map((year) => (
      {
        name: year.title,
        details: data.filter(function (element) {
          return getYearWeddings(element, year.year)
        }),
      }
    ))

    const getWeddingsYearAmount = (yearDetails) => {

      const weddingsAmount = yearDetails.filter(function (element) {
        return getWeddingWithStatus(element, STATUS.BUSY)
      });

      return weddingsAmount.length
    };




    const getContent=()=>(
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
              <Months onDeleteTerm={this.onDeleteTerm} terms={year.details} weddingAmount={weddingAmount}/>
            </TabPanel>
          )
        })}
      </div>
    )

    //comment line below to make a verification
    return (getContent())

    if (passCustom === "dupa") {
      return (getContent())
    } else {
      return <div>
        Nie masz dostępu

        <input
          type={"text"}
          value={this.state.passCustom}
          onChange={(event) => this.setState({passCustom: event.target.value})}
        />
      </div>
    }
  }
};


TermsNewVersion.propTypes = {
  classes: PropTypes.object.isRequired,
};

TermsNewVersion.displayName = 'Terms';

export default TermsNewVersion;
