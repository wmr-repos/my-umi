import Space from './components/Space'
import { ConfigContext, ConfigProvider } from './ConfigProvider'
import styles from './index.less'

const Index = () => {
  return (
    <>
      <Space
        className={styles.container}
        wrap={true}
        size={['large', 'small']}
        direction="vertical"
        align="end"
        // split={
        //   <div className={styles.box} style={{ background: 'yellow' }}></div>
        // }
      >
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
      </Space>
      <ConfigContext.Provider value={{ space: { size: 50 } }}>
        <Space direction="vertical">
          <div className={styles.box}>1</div>
          <div className={styles.box}>2</div>
          <div className={styles.box}>3</div>
        </Space>
      </ConfigContext.Provider>
      <ConfigProvider space={{ size: 50 }}>
        <Space direction="vertical">
          <div className={styles.box}>1</div>
          <div className={styles.box}>2</div>
          <div className={styles.box}>3</div>
        </Space>
      </ConfigProvider>
    </>
  )
}

export default Index
