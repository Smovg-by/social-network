import { WrappedFieldProps } from 'redux-form'
import styles from './FormsControls.module.css'

type superInputOwnPropsType = {
  element: 'input' | 'textarea'
  type: 'email' | 'password' | 'checkbox'
  placeholder: 'Login' | 'Password' | 'rememberMe'
}

export const FormsControl = ({
  element,
  type,
  input,
  meta: { touched, error },
  placeholder,
}: WrappedFieldProps & superInputOwnPropsType) => {

  const hasError = touched && error

  const elementSwitch = (element: 'input' | 'textarea') => {
    switch (element) {
      case 'input':
        return <input {...input} placeholder={placeholder} type={type} />
      case 'textarea':
        return <textarea {...input} placeholder={placeholder} />
      default:
        break
    }
  }

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      {elementSwitch(element)}
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  )
}
