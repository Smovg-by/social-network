import React, { ChangeEvent, FocusEvent } from 'react'
import classes from './ProfileInfo.module.css'

type PrfileStatusPropsType = {
  status: string | null
  updateStatus: (status: string | null) => void
}

class ProfileStatus extends React.Component<PrfileStatusPropsType> {

  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => { // если использовать стрелочнуюб можно не байндить
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => { // если использовать стрелочнуюб можно не байндить
    this.setState({
      editMode: false
    })

    this.props.updateStatus(this.state.status)
  }

  handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, status: e.currentTarget.value })
  }

  render() {

    return (
      <div>
        Status:
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>'{this.state.status || this.props.status}'</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange={this.onStatusChange} value={this.state.status || this.props.status + ''} autoFocus onBlur={this.deactivateEditMode} onFocus={this.handleFocus} />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
