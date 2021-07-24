import React, { FocusEvent } from 'react'
import classes from './ProfileInfo.module.css'

type PrfileStatusPropsType = {
  status: string
}

class ProfileStatus extends React.Component<PrfileStatusPropsType> {
  state = {
    editMode: false
  }

  activateEditMode = () => { // если использовать стрелочнуюб можно не байндить
    this.setState({
      editMode: true
    })
    // this.state.editMode = true
    // this.forceUpdate()
  }
  deactivateEditMode = () => { // если использовать стрелочнуюб можно не байндить
    this.setState({
      editMode: false
    })
  }

  handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  }

  render() {
    return (
      <div>
        Status:
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>'{this.props.status}'</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input value={this.props.status} autoFocus onBlur={this.deactivateEditMode} onFocus={this.handleFocus} />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
