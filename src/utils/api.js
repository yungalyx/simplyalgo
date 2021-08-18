
export function request_backtest() {
    if (process.env.REACT_APP_DEV_MODE) {
        return fetch('http://localhost:8000/test/')
    } else {
        console.log("prod mode not yet supported")
    }
}