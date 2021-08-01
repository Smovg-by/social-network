
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { authAPI } from '../../api/api'
import { getAuthUserData } from '../../redux/authReducer'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type={'email'} placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field type={'password'} placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)

export const Login = () => {

  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
    let { login, password, rememberMe } = formData
    authAPI.logIn(login, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) { <Redirect to={'/Music'} /> }
    })

  }

  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
