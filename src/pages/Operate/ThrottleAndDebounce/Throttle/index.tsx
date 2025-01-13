import { PageContainer } from '@ant-design/pro-components';
import { throttle2 } from './utils/throttle';

export default () => {
  function color() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.querySelector(
      '#box1',
    ).style.backgroundColor = `rgb(${r},${g},${b})`;
    document.querySelector(
      '#box2',
    ).style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  // window.addEventListener('resize', throttle(color, 1000), true);
  window.addEventListener('resize', throttle2(color, 1000), true);

  return (
    <>
      <PageContainer
        header={{
          title: '节流',
        }}
        style={{ height: '100vh', width: '100vw', backgroundColor: '#fff' }}
      >
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#ff00ff',
          }}
          id="box1"
        >
          box1
        </div>
        <div
          style={{
            marginTop: '10px',
            width: '100px',
            height: '100px',
            backgroundColor: '#ff00ff',
          }}
          id="box2"
        >
          box2
        </div>
      </PageContainer>
    </>
  );
};
