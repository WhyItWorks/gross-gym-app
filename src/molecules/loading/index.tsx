import React from 'react'
import Logo from './grossLogoNegro.png'
import styles from './Loader.module.scss'
import { Spin } from 'antd'

enum LoaderSizes {
  ExtraSmall = 'Xs',
  Small = 'Sm',
  Medium = 'Md',
  Large = 'Lg'
}
interface ILoader {
  children?: React.ReactNode
  overlay?: boolean
  color?: boolean
  sizes?: LoaderSizes
  altImg?: string
  spinning?: boolean
}
const Loader: React.FC<ILoader> = ({
  sizes = LoaderSizes.Medium,
  altImg = 'commons.loader.altImg',
  children,
  spinning = false
}) => {
  return (
    <Spin
      indicator={
        <div className={` ${styles[`${sizes}`]}`}>
          <div className={styles.loader}>
            <img alt={`${altImg}`} className={styles.logo} src={Logo} />
          </div>
        </div>
      }
      spinning={spinning}
    >
      {children}
    </Spin>
  )
}

export default Loader
