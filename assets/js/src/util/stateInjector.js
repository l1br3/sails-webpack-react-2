/**
 * @description: This function will connect all actions to components and selected states
*/



import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from 'actions'


export default function(stateProps = []){

  function mapStateToProps(state) {

    const props = {}

    stateProps.map(prop => {
      props[prop] = state[prop]
    })

    return props
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch), dispatch }
  }


  return (Component) => connect(mapStateToProps, mapDispatchToProps)(Component)
}
