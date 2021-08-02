import styles from './FormsControls.module.css'

export const SuperInput = ({ element, type, input, meta: { touched, error, ...meta }, placeholder, ...props }: any) => {

  const hasError = touched && error

  const elementSwitch = (element: any) => {
    switch (element) {
      case 'input':
        return (<input {...input} placeholder={placeholder} type={type} />);
      case 'textarea':
        return (<textarea {...input} placeholder={placeholder} />)
      default:
        break;
    }
  }

  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
      {elementSwitch(element)}
      <div>
        {hasError && <span>{error}</span>}
      </div>
    </div>
  )
}
