import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../state/actions/getDataActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

export const DataLoader = ({ data, dataPending, getData }) => {
  console.log('data', data)
  return (
    <div>
      What up?
      <button onClick={getData}>
        Click Here
      </button>
      <div>
        {`Data Pending? ${dataPending}`}
      </div>
    </div>
  )
}

DataLoader.propTypes = {
  data: PropTypes.any,
  getData: PropTypes.func,
  dataPending: PropTypes.bool
}

export const mapStateToProps = ({ dataState }) => ({
  data: dataState.data,
  dataPending: dataState.dataPending
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData: () => fetchData()
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataLoader)
