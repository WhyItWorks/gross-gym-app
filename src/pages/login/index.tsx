import { useState } from 'react'
import { LoginOrganism } from '../../organisms/login'
import { IFormField } from 'src/interfaces'

export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const onAccessRegister = (formValues: {
    [value: string]: string | number
  }) => {
    setLoading(true)
    console.log(formValues)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  const inputs: IFormField[] = [
    {
      rules: [{ required: true, message: 'Ingresa tu rut' }],
      name: 'rut',
      placeholder: 'Rut'
    },
    {
      rules: [{ required: true, message: 'Ingresa tu contraseña' }],
      name: 'password',
      placeholder: 'Contraseña'
    }
  ]
  return (
    <LoginOrganism
      formName={'accessControlForm'}
      inputs={inputs}
      loading={loading}
      submitButtonName='Entrar'
      title={'Iniciar sesión'}
      onSubmit={onAccessRegister}
    />
  )
}
