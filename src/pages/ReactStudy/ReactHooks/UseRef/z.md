#### useRef

useRef 保存 dom 引用的时候，参数需要传 null，不然会报错<br>

```javascript
const inputRef = useRef < HTMLInputElement >(null)
```

保存别的内容的时候，不能传 null，不然也会报错，说是 current 是只读的

```javascript
const numRef = useRef < number >(0)
```

因为当你传入 null 的时候，返回的是 RefObject，他的 current 是只读的，因为保存的 dom 不能更改<br> 

而不传 null 的时候，返回的是 MutableRefObject，他的 current 可以修改<br> 

总结：传 null 就是 dom 引用，返回 RefObject，不传就是其他数据，返回 MutableRefObject
