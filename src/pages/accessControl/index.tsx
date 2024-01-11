import { useState } from 'react'
import { toast } from 'react-toastify'
import { LoginOrganism } from '../../organisms/login'
import { IFormField } from 'src/interfaces'

export const AccessControl: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const onAccessRegister = (formValues: {
    [value: string]: string | number
  }) => {
    setLoading(true)
    console.log(formValues)
    setTimeout(() => {
      setLoading(false)
      toast.success('Asistencia registrada', { theme: 'colored', progress: 0 })
      toast.error('Usuario no registrado', { theme: 'colored', progress: 0 })
      toast.warning('Fuera de horario', { theme: 'colored', progress: 0 })
    }, 1000)
  }
  const inputs: IFormField[] = [
    {
      rules: [{ required: true, message: 'Ingresa tu rut' }],
      name: 'rut',
      placeholder: 'Rut'
    }
  ]
  return (
    <LoginOrganism
      formName={'accessControlForm'}
      inputs={inputs}
      loading={loading}
      submitButtonName='Registrar asistencia'
      title={'Control de acceso'}
      onSubmit={onAccessRegister}
    />
  )
}
