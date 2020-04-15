import React from 'react';
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import { LEAF, REPERTOIRE_ARTO } from '../../constants'

import PageWrapper from '../../components/PageWrapper';
import FilmPhotoChoice from "../../components/Film-PhotoChoice";
import Typography from "@material-ui/core/Typography";


const Media = ({classes}) => (
  <PageWrapper>
    {/*<FilmPhotoChoice/>*/}
    <div className={classes.mainContainer}>

      {/*TODO Wstawić opis zespołu co proponujemy na przyjęciu weselnym, jakoś ładnie to ubrać w ikony*/}
      {/*powitanie gość,...oczepiny, ....*/}

      {/* TODO Wstawić ofertę LOVE napisa i inne*/}

      <Typography className={classes.contactTextContainer}>Oferta</Typography>
      <div className={classes.imageContainer}>
        <img src={LEAF} alt={'liść'}/>
      </div>

      <div className={classes.repertoireContainer}>
        <Typography className={classes.repertoireContainerText}>
          Zobacz w jaką muzyczną przygodę zabierzemy Cie na Twoim weselu.
        </Typography>

        <a href={REPERTOIRE_ARTO} download>
          <Button variant="outlined">Pobierz Repertuar</Button>
        </a>
      </div>

    </div>
  </PageWrapper>
);


Media.propTypes = {
  classes: PropTypes.object.isRequired,
};

Media.displayName = 'Media';

export default Media;

//  Zdefiniowac komponent do pobierania plikow
//
// import React from 'react';
// import PropTypes from 'prop-types';
//
//
// export const DownloadLink = ({ to, children, ...rest }) => {
//
//   return (
//     <a
//       {...rest}
//       href={to}
//       download
//     >
//       {children}
//     </a>
//   );
// };
//
//
// DownloadLink.propTypes = {
//   to: PropTypes.string,
//   children: PropTypes.any,
// };
//
// export default DownloadLink;