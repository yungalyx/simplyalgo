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
            setChartData(data.data)
        })
    }
   
    return <div> 
        <button onClick={handleRun}> Test </button>
        <EquityCurveChart data={chartData} />
    </div>;
    
}

export default StrategyBuilder;