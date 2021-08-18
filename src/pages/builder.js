import React, {useState, useEffect} from "react"
import { request_backtest } from "../utils/api"
import { EquityCurveChart } from "../utils/charts"

const StrategyBuilder = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [chartData, setChartData] = useState([])

    const handleRun = async() => {
        await request_backtest().then(res => {
            return res.json()
        }).then(data => {
            /*
            let chartData = Object.entries(data.data).map((a, b) => {
                return {cash: a, value: b};
            })
            console.log(chartData)
            */
           console.log(data)
           setChartData(Object.values(data))
        })
    }
   
    return <div> 
        <button onClick={handleRun}> Test </button>
        <EquityCurveChart data={chartData} />
    </div>;
    
}

export default StrategyBuilder;