import { ConfigProvider, Space } from 'antd'
import styles from './index.less'

const Index = () => {
  return (
    <>
      <div>
        <Space
          direction="horizontal"
          split={
            <div className={styles.box} style={{ background: 'yellow' }}></div>
          }
        >
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </Space>
      </div>
      <div>
        <ConfigProvider space={{ size: 100 }}>
          <Space direction="horizontal">
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </Space>
          <Space direction="vertical">
            <div className={styles.box}>1</div>
            <div className={styles.box}>2</div>
            <div className={styles.box}>3</div>
          </Space>
        </ConfigProvider>
      </div>
    </>
  )
}

export default Index
