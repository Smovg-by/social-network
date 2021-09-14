import React, {ChangeEvent, FocusEvent, useEffect, useState} from 'react'
import classes from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => { // если использовать стрелочнуюб можно не байндить
        setEditMode(true)
    }
    const deactivateEditMode = () => { // если использовать стрелочную можно не байндить
        setEditMode(false)
        props.updateStatus(status)
    }

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
        event.target.select();
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus( e.currentTarget.value)
    }

    return (
        <div>
            Status:
            {!editMode && (<div><span onDoubleClick={activateEditMode}>'{status || 'no status'}'</span></div>)}
            {editMode && (<div><input
                    onChange={onStatusChange}
                    value={status}
                    autoFocus
                    onBlur={deactivateEditMode}
                    onFocus={handleFocus}/>
                </div>
            )}
        </div>
    )
}
