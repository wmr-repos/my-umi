import copy from 'copy-to-clipboard'
import CopyToClipboard from './components/CopyToClipboard'

export default function App() {
  function onClick() {
    const res = copy('这是一段文本')
    console.log('done', res)
  }

  return (
    <>
      <div onClick={onClick}>点我复制</div>

      <CopyToClipboard
        text={'这是一段文本2'}
        onCopy={() => {
          console.log('done')
        }}
      >
        <div onClick={() => alert(1)}>复制</div>
      </CopyToClipboard>
    </>
  )
}
