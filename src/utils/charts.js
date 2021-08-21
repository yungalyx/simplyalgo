import React, { useState, useEffect, useCallback } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Bar, BarChart, CartesianGrid, Tooltip, AreaChart } from 'recharts'
import styled from 'styled-components'

const ChartWrapper = styled.div`
  padding-top: 1em;
  margin-left: 2em;
  margin-right: 2em;
`

const toNiceDate = date => {
    if (typeof date == "string") { 
        return date.split("T")[0]
    }
}

/**
 * Generates an equity curve
 * @param {Array} data - an array of Objects {date, value, cash} denoting a equity curve
 * 
 */
export const EquityCurveChart = ({data}) => {
    const [chartData, setChartData] = useState([]) 
    
    useEffect(() => {
        setChartData([])
        setChartData(data)
        console.log(data)
    }, [data])
    
    return (
        <ChartWrapper>
            <h1> Equity Curve </h1>
            <ResponsiveContainer aspect={16 / 4}>  
                {chartData.length < 1 ? 
                <p> Loading... </p>
                :
                <LineChart
                    data={chartData}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        label="date"
                        tickFormatter={tick => toNiceDate(tick)}
                        tickMargin={16}
                        minTickGap={14}
                    />
                    <YAxis
                        type="number"
                        orientation="left"
                        domain={['dataMin', 'auto']}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="cash" stroke="#8884d8"  dot={false} />
                    <Line type="monotone" dataKey="value" stroke="#82ca9d" dot={false} />
                </LineChart>
                }
            </ResponsiveContainer>
        </ChartWrapper>
    )
}