import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { Navbar } from './Navbar'

export type sideBarDataType = {
  id: number
  name: string
  avatar: string
}

type MapStatePropsType = {
  sideBarData: Array<sideBarDataType>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    sideBarData: state.sideBarData
  }
}

export default compose<ComponentType>(connect(mapStateToProps, {}))(Navbar)
