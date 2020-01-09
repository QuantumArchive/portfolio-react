import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../state/actions/getDataActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

export const DataLoader = ({ data, getData }) => {
  console.log('data', data)
  return (
    <div>
      What up?
      {/* {dataState} */}
      <button onClick={getData}>
        Click Here
      </button>
    </div>
  )
}

DataLoader.propTypes = {
  data: PropTypes.any,
  getData: PropTypes.func
}

export const mapStateToProps = ({ dataState }) => ({ data: dataState.data })

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData: () => dispatch(fetchData())
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataLoader)
