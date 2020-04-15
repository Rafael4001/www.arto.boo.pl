import React from 'react';
import PropTypes from "prop-types";

import PageWrapper from '../../components/PageWrapper';
import PlayerCustomized from "../../components/PlayerCustomized";



const Demo = () => (
  <PageWrapper>
    <PlayerCustomized/>
  </PageWrapper>
);


Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

Demo.displayName = 'Demo';

export default Demo;
