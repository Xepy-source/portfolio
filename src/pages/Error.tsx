import { FallbackProps } from "react-error-boundary";
import styles from "./Error.module.css";

export default function Error({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div role="alert" className={styles.container}>
            {/* <pre>{error.message}</pre> */}
            <pre>에러가 발생하였습니다.</pre>
            <button onClick={resetErrorBoundary}>새로고침</button>
            <br />
            <a href="/">HOME</a>
        </div>
    );
}
