import {connect} from 'react-redux'
import AppView from './App'

const MapStateToProps = state => ({
  title: state.title,
  numero: state.num
})

const MapDispatchToProps = dispatch => ({
  IncrementarVal: ()=>{
    dispatch({
      type: 'INCREMENT'
    })
  },
  DecrementarVal: () => {
    dispatch({
      type:'DECREMENT'
    })
  }
})

//se exporta por defecto ... lleva como primer parametro el del estado y en un parentesis aparte se le pasa el componente de presentacion
export default connect(MapStateToProps, MapDispatchToProps)(AppView)
