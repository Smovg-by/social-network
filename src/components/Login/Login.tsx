import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { loginTC, logoutTC } from '../../redux/authReducer'
import { AppStateType } from '../../redux/redux-store'
import { required } from '../../utils/validators/validators'
import { SuperInput } from '../Common/FormsControls/FormsControls'
import styles from '../Common/FormsControls/FormsControls.module.css'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          element={'input'}
          type={'email'}
          placeholder={'Login'}
          name={'login'}
          validate={[required]}
          component={SuperInput}
        />
      </div>
      <div>
        <Field
          element={'input'}
          type={'password'}
          placeholder={'Password'}
          name={'password'}
          validate={[required]}
          component={SuperInput}
        />
      </div>
      <div>
        <Field
          element={'input'}
          type={'checkbox'}
          name={'rememberMe'}
          component={SuperInput}
        />{' '}
        remember me
      </div>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
      <div>
        <button>Log in</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)

const Login = (props: any) => {
  const onSubmit = (formData: FormDataType) => {
    let { login, password, rememberMe } = formData
    props.loginTC(login, password, rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  } else
    return (
      <div>
        <h1>Login page</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginTC, logoutTC })(Login)
