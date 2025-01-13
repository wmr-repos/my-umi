#### 父组件与子组件的渲染

react 是自上而下渲染，父组件渲染时，会依次渲染子组件<br>

当父组件的状态或 props 发生变化时，React 将首先重新渲染父组件，然后再渲染所有的子组件<br>

#### useEffect 解决了什么问题？

useEffect 解决了函数式组件没有生命周期勾子函数的尴尬情况，在 class 组件中有响应的生命周期勾子函数，方便进行状态管理，之前函数组件没有推广也是因为，他没有自己的状态管理，useEffect 解决了这个问题<br>

useEffect 模仿了 class 的生命周期，useEffect 分三种情况：

1. useEffect(() => {})：模拟组件的挂载与组件的更新，也就是组件挂载会执行回调，组件更新也会执行回调
2. useEffect(() => {}, [])：有依赖收集数组时，回调函数只会在组件挂载时执行回调，或者是在数组中的数据发生变化时执行回调
3. useEffect(() => { return () => { '组件卸载' } }, [])：回调中的 return 函数，会在组件卸载时执行

#### useReducer

```javascript
const [state, dispatch] = useReducer((state, action) => {}, initialArg, init)
```

- 在 reducer 中，如果返回的 state 和之前的 state 值相同，那么组件将不会更新。
- `useReducer` 与 `useState` 的区别在于，`useState` 的更新是同步的，而 `useReducer` 的更新是异步的。
