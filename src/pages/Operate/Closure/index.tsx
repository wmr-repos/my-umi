import { useInterval } from '@/hooks/useInterval'
import { useEffect, useRef, useState } from 'react'

// export const useIsMounted = () => {
//   const isMountedRef = React.useRef(false);
//   React.useEffect(() => {
//     isMountedRef.current = true;
//     return () => {
//       isMountedRef.current = false;
//     };
//   }, []);
//   return isMountedRef;
// };

export default () => {
  // 原题
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("count:", count);
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // setCount
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((count) => {
  //       console.log('count:', count)
  //       return count + 1
  //     })
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  // ===============
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('count:', count)
  //     setCount(count + 1)
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [count])
  // =============

  // useReducer
  // const countReducer = (state, action) => {
  //   if (action.type === 'increment') {
  //     return { count: state.count + 1 }
  //   }
  // }

  // const [state, dispatch] = useReducer(countReducer, { count: 0 })
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('count:', state?.count)
  //     dispatch({ type: 'increment' })
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [state.count])

  // useRef
  const [count, setCount] = useState<number>(0)

  const updateFunc = () => {
    setCount((value) => value + 1)
  }

  // const ref = useRef<Function>(updateFunc)

  // ref.current = updateFunc

  // useEffect(() => {
  //   console.log(count);
  //   const interval = setInterval(() => {
  //     ref.current()
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [count])

  useInterval(updateFunc,1000)

  return (
    <>
      {/* {`useReducer:${state.count}`} */}
      {`useRef:${count}`}
    </>
  )
}
