import { marked } from 'marked';

export default () => {
  const markdownStr =
    '### 三级标题<br><br>- <strong>加粗文字</strong>：正常文本<br>- <strong>加粗文字</strong>正常文字<br>- <strong>加粗</strong>：1234567890<br>- <strong>加粗</strong>：是东方百盛大户vi配合弄；弄结合治疗 企鹅v去潍坊v<br><br>### 三级标题<br><br>- <strong>在线咨询与预约</strong>：234567890';
  return (
    <>
      <span>原富文本为：{markdownStr}</span>
      <div
        style={{ marginTop: '20px' }}
        dangerouslySetInnerHTML={{
          __html: marked.parse(markdownStr)?.replace(/\\n/g, '<br/>'),
        }}
      />
    </>
  );
};
