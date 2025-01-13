type Func = (...args: any[]) => any;

// 节流的写法一
export const throttle = (func: Func, delay: number) => {
  let timer: any;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) return;
    timer = setTimeout(() => {
      func.apply(context, args);
      timer = null;
    }, delay);
  };
};

// 节流的写法二
export const throttle2 = (func: Func, delay: number) => {
  let pre = 0;
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - pre > delay) {
      func.apply(context, args);
      pre = now;
    }
  };
};
