// 手写防抖函数

type DebounceFunction = (...args: any[]) => void;

export const debounce = (func: DebounceFunction, delay: number) => {
  let timer: NodeJS.Timeout | undefined;
  return function (...args: any[]) {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
