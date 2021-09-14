import React, { ChangeEvent, FocusEvent } from 'react'
import classes from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

type ProfileStatusStateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state: ProfileStatusStateType = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => { // если использовать стрелочнуюб можно не байндить
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => { // если использовать стрелочную можно не байндить
    this.setState({
      editMode: false
    })

    this.props.updateStatus(this.state.status)
  }

  handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType): void {
    if (prevProps.status !== this.props.status) { // обязательно задаем условие, т.к. иначе будет превышен call stack!!!
      this.setState({
        status: this.props.status
      })
    }

  }

  render() {

    return (
      <div>
        Status:
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {/* '{this.props.status}' */}
              '{this.state.status || 'no status'}'
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              // value={this.state.status || this.props.status + ''}
              value={this.state.status}
              autoFocus
              onBlur={this.deactivateEditMode}
              onFocus={this.handleFocus} />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
