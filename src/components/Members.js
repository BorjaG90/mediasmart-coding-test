import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Member from './Member'

class Members extends Component {
  render() {
    return this.props.members.map(member =>
      <Member
        member={member}
        key={member.id}
        paintProfile={this.props.paintProfile}
      />
    )
  }
}

// Validation
Members.propTypes = {
  members: PropTypes.array.isRequired
}

export default Members