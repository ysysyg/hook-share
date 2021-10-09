# 示例使用

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# 前端实战套路总结

## React Hooks

### 用来做什么

Hooks 意为钩⼦, React Hooks 就是⼀堆钩⼦函数, React 通过这些钩⼦函数对函数型组件进⾏增强, 让函数型组件可以**存储状态**, 可以拥有**处理副作⽤**的能⼒. 让开发者在不使⽤类组件的情况下, 实现相同的功能

不同的钩⼦函数提供了不同的功能

- useState()
- useEffects()
- useCallback()
- useMemo()
- useRef()
- useReducer()
- useContext()

### 使用规则注意

1. 只能在函数最外层调用 Hook。不能在循环、条件或者子函数中调用
2. **只能在 React 的函数组件中调用 Hook**

### useState()

⽤于为函数组件引⼊状态

#### useState 细节

1. 接收唯⼀的参数即状态初始值. 初始值可以是任意数据类型
2. 返回值为数组. 数组中存储状态值和更改状态值的⽅法. ⽅法名称约定以 set 开头, 后⾯加上状态名称
3. ⽅法可以被调⽤多次. ⽤以保存不同状态值
4. 参数可以是⼀个函数, 函数返回什么, 初始状态就是什么, 函数只会被调⽤⼀次, ⽤在初始值是动态值的情况

#### 设置状态⽅法的使⽤细节

1. 设置状态值⽅法的参数可以是⼀个值也可以是⼀个函数
2. 设置状态值⽅法的⽅法本身是异步的

### useEffect()

让函数型组件拥有处理副作⽤的能⼒. 类似⽣命周期函数

#### 执行时机

可以把 useEffect 看做 componentDidMount, componentDidUpdate 和 componentWillUnmount 这三个函数的组合.

#### useEffect 数据监测

只有指定数据发⽣变化时触发 effect

#### useEffect 结合异步函数

useEffect 中的参数函数不能是异步函数, 因为 useEffect 函数要返回清理资源的函数, 如果是异步函数就变成了返回 Promise

### useMemo()

useMemo 的⾏为类似 Vue 中的计算属性, 可以监测某个值的变化, 根据变化值计算新值

useMemo 会缓存计算结果. 如果监测值没有发⽣变化, 即使组件重新渲染, 也不会重新计算.

此⾏为可以有助于避免在每个渲染上进⾏昂贵的计算

### memo

性能优化, 如果本组件中的数据没有发⽣变化, 阻⽌组件更新. 类似类组件中的 PureComponent 和 shouldComponentUpdate

### useCallback()

性能优化, 缓存函数, 使组件重新渲染时得到相同的函数实例

### useRef()

1. 获取 DOM 元素对象
2. 保存数据（跨组件周期）

### hook 库

- ahooks ✅
  - https://ahooks.js.org/zh-CN/hooks/state/use-set-state
- react-use

## 本地存储

### indexDB

#### 诞生背景

随着浏览器的功能不断增强，越来越多的网站开始考虑，将大量数据储存在客户端，这样可以减少从服务器获取数据，直接从本地获取数据。现有的浏览器数据储存方案，都不适合储存大量数据：Cookie 的大小不超过 4KB，且每次请求都会发送回服务器；LocalStorage 在 2.5MB 到 10MB 之间（各家浏览器不同），而且不提供搜索功能，不能建立自定义的索引。所以，需要一种新的解决方案，这就是 IndexedDB 诞生的背景

[兼容性](https://caniuse.com/?search=indexdb)

[业务应用](https://test-miao.bixin.cn/miao-hc/recruit/plan-application)

#### 特点

- 键值对存储
- 异步
- 支持事务
- 同源限制
- 储存空间大
- 支持二进制储存

#### use-dexie

[React Hooks to use Dexie.js IndexDB library](https://www.npmjs.com/package/use-dexie)

## 样式

### classnames

https://www.npmjs.com/package/classnames

### flex 布局快捷使用方式

#### flex.less

```less
@direction: row, row-reverse, column, column-reverse;
@flow: wrap, nowrap;
@justify-contents: {
  start: flex-start;
  end: flex-end;
  center: center;
  between: space-between;
  around: space-around;
};
@align-items: {
  start: flex-start;
  end: flex-end;
  center: center;
  baseline: baseline;
  stretch: stretch;
};

.flex {
  each(@direction, .(@dr) {
    each(@flow, .(@fw) {
      &-@{dr}-@{fw} {
        display: flex;
        flex-flow: @dr @fw;
      }
    });
  });

  each(@justify-contents, .(@justify, @justify-name) {
    each(@align-items, .(@align, @align-name) {
      &-@{justify-name}-@{align-name} {
        justify-content: @justify;
        align-items: @align;
      }
    });
  });
}
```

#### index.jsx

```jsx
import "./flex.less";

function Index() {
  return <div className="flex-row-nowrap flex-center-center">上下左右居中</div>;
}
```

# 参考链接

[浏览器数据库 IndexedDB 入门教程](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)
