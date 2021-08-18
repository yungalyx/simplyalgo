import React, { useState, useEffect, useCallback } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Bar, BarChart, CartesianGrid, Tooltip, AreaChart } from 'recharts'


/**
 * Generates an equity curve
 * @param {Array} data - an array of Objects {date, value, cash} denoting a equity curve
 */
export const EquityCurveChart = ({data}) => {
    return <ResponsiveContainer aspect={60/34}>
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cash" stroke="#8884d8"  />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
}