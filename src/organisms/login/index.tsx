import styles from './index.module.scss'
import GrossLogo from '../../assets/GrossLogo.png'
import { Button, Form, Input } from 'antd'
import Title from 'antd/es/typography/Title'
import { IFormField } from 'src/interfaces'
import Loader from '../../molecules/loading'

interface ILoginOrganism {
  onSubmit: (form: { [key: string]: string }) => void
  submitButtonName: string
  formName: string
  title: string
  inputs: IFormField[]
  loading: boolean
}

export const LoginOrganism: React.FC<ILoginOrganism> = ({
  onSubmit,
  submitButtonName,
  formName,
  title,
  inputs,
  loading
}) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Loader spinning={loading}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img alt='logo' src={GrossLogo} />
            </div>
            <div className={styles.form}>
              <img alt='logo' className={styles.logoMobile} src={GrossLogo} />
              <Title className={styles.title}> {title} </Title>
              <Form
                initialValues={{ remember: true }}
                layout='vertical'
                name={formName}
                onFinish={onSubmit}
              >
                {inputs.map(({ rules, name, placeholder }) => {
                  return (
                    <Form.Item key={name} name={name} rules={rules}>
                      <Input name={name} placeholder={placeholder} />
                    </Form.Item>
                  )
                })}
                <Form.Item>
                  <Button htmlType='submit' type='primary'>
                    {submitButtonName}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Loader>
    </div>
  )
}
