export default () => {
  const htmlContent = `
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
    </ul>
  `;
  return (
    <>
    <span>原字符串为：{htmlContent}</span>
     <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  )
}