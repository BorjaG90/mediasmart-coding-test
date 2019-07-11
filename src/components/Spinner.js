import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridLoader } from 'react-spinners';
import { css } from '@emotion/core';

// Spinner css
const override = css`
    display: block;
    margin: 0 auto;
    width: 150px;
`;

class Spinner extends Component {
  render(){
    const { loading } = this.props;

    return (
      <GridLoader
          css={override}
          sizeUnit={'px'}
          size={90}
          color={'rgb(220,20,60)'}
          loading={loading}
        />
    )
  }
}

// Validation
Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Spinner;