import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { Formik } from 'formik';
import { Field } from 'formik';
import Button from "@material-ui/core/Button";
import MomentFnsUtils from '@date-io/moment';
import moment from 'moment-timezone';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import Error from '../../components/Error'
import FormikDateField from './FormikDateField'

import { validationSchemaYup } from './AddTermValidation'
import { createReservation, deleteReservation } from '../../services/reservationsService'

import { API_URL } from "../../config";
import { DATE_FORMAT, STATUS_SELECT } from "../../constants";

moment.tz.setDefault('Atlantic/Reykjavik');

// instructions
//https://www.youtube.com/watch?v=TxEVnaISj1w

const AddTermForm = ({classes}) => {
  const [data, setData] = useState([]);

  const getReservations = () => (
    axios.get(API_URL)
      .then(result => {
        setData(result.data)
      })
  )

  useEffect(() => {
    getReservations()
  }, []);

  const onSubmit = async (values) => {
    await createReservation(values)
    await getReservations();
  }

  const onDeleteReservation = async (id) => {
    //TODO dodac confirm Dialog
    await deleteReservation(id)
    await getReservations();
  }

  //TODO dodać edycję wydarzenia


  const initialValues = {
    weddingDate: new Date("2014-08-18T21:11:54"),
    weddingAddress: "",
    weddingHotelName: "",
    weddingHotelAddress: "",
    weddingStatus: "",
    weddingAdditionalDetails: "",
  }


  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaYup}
        onSubmit={(values, {setSubmitting, resetForm, setFieldValue}) => {
          // setSubmitting(true);
          // resetForm();
          onSubmit(values)
          resetForm()

        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => {
          console.log('values', values)
          console.log('errors', errors)

          return (
            <form onSubmit={handleSubmit}>
              {/*{JSON.stringify(values)}*/}
              <div>
                <Field
                  name={"weddingDate"}
                  component={FormikDateField}
                  label={"Data wesela"}
                />

                {/*<input*/}
                {/*  type="date"*/}
                {/*  name="weddingDate"*/}
                {/*  id="weddingDate"*/}
                {/*  onChange={handleChange}*/}
                {/*  onBlur={handleBlur}*/}
                {/*  value={values.weddingDate}*/}
                {/*  className={touched.weddingDate && errors.weddingDate && classes.errorText}*/}
                {/*/>*/}
                <Error touched={touched.weddingDate} message={errors.weddingDate}/>
              </div>

              <div>
                <label htmlFor="name">Miejscowość</label>
                <input
                  type="text"
                  name="weddingAddress"
                  id="weddingAddress"
                  placeholder="miejscowość"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weddingAddress}
                  className={touched.weddingAddress && errors.weddingAddress && classes.errorText}
                />
                <Error touched={touched.weddingAddress} message={errors.weddingAddress}/>
              </div>

              <div>
                <label htmlFor="name">Dom weselny</label>
                <input
                  type="text"
                  name="weddingHotelName"
                  id="weddingHotelName"
                  placeholder="Nazwa domu weselnego"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weddingHotelName}
                  className={touched.weddingHotelName && errors.weddingHotelName && classes.errorText}
                />
                <Error touched={touched.weddingHotelName} message={errors.weddingHotelName}/>
              </div>

              <div>
                <label htmlFor="name">Adres domu weselnego</label>
                <input
                  type="text"
                  name="weddingHotelAddress"
                  id="weddingHotelAddress"
                  placeholder="adres domu weselnego"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weddingHotelAddress}
                  className={touched.weddingHotelAddress && errors.weddingHotelAddress && classes.errorText}
                />
                <Error touched={touched.weddingHotelAddress} message={errors.weddingHotelAddress}/>
              </div>

              <div>
                <label htmlFor="name">Status terminu</label>
                <select
                  id="weddingStatus"
                  name="weddingStatus"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weddingStatus}
                  className={touched.weddingStatus && errors.weddingStatus && classes.errorText}
                >
                  {STATUS_SELECT.map(status => (
                    <option key={status.name} value={status.value}>{status.name}</option>
                  ))}
                </select>
                <Error touched={touched.weddingStatus} message={errors.weddingStatus}/>
              </div>

              <div>
                <label htmlFor="name">Szczegóły dodatkowe</label>
                <input
                  type="text"
                  name="weddingAdditionalDetails"
                  id="weddingAdditionalDetails"
                  placeholder="adres domu weselnego"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weddingAdditionalDetails}
                  className={touched.weddingAdditionalDetails && errors.weddingAdditionalDetails && classes.errorText}
                />
                <Error touched={touched.weddingAdditionalDetails} message={errors.weddingAdditionalDetails}/>
              </div>

              <div>
                <Button
                  variant="contained"
                  type={"submit"}
                  disabled={isSubmitting}
                >DODAJ
                </Button>
              </div>
            </form>
          )
        }}
      </Formik>


      -----------------------------------------
      {data.map((item, id) => (
        <ul key={item._id}>
          <li>{id + 1}</li>
          <li>{item.weddingDate}</li>
          <li>{item.weddingAddress}</li>
          {item.weddingHotelAddress && <li>{item.weddingHotelAddress}</li>}
          <li>{item.weddingHotelName}</li>
          <li>{item.weddingStatus}</li>
          <Button
            type={"submit"}
            color="secondary"
            variant="outlined"
            onClick={() => onDeleteReservation(item._id)}
          >USUN
          </Button>
        </ul>
      ))}
    </>
  )
}

AddTermForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

AddTermForm.displayName = 'AddTermForm';

export default AddTermForm;