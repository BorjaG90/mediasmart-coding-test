import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import { css } from '@emotion/core';

// Spinner css
const override = css`
    display: block;
    margin: 0 auto;
    width: 33px;
    z-index: 5;
`;

class Pulse extends Component {
  render(){
    const { loading } = this.props;

    return (
      <PropagateLoader
          css={override}
          sizeUnit={'px'}
          size={33}
          color={'rgb(220,20,60)'}
          loading={loading}
        />
    )
  }
}

// Validation
Pulse.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Pulse;