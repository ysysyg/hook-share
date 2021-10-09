import { Link } from "umi";

export default function IndexPage() {
  return (
    <div>
      <h1>示例目录</h1>
      <Link to="/useState/demo1" target="_blank">
        useState
      </Link>
      <Link to="/useEffect/demo1" target="_blank">
        useEffect
      </Link>
      <Link to="/useMemo/demo1" target="_blank">
        useMemo
      </Link>
      <Link to="/memo/demo1" target="_blank">
        memo
      </Link>
      <Link to="/useCallback/demo1" target="_blank">
        useCallback
      </Link>
      <Link to="/useRef/demo1" target="_blank">
        useRef
      </Link>
      <Link to="/style/demo1" target="_blank">
        style
      </Link>
    </div>
  );
}
