import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, Scatter, XAxis,
    YAxis, ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush,
    LineChart } from 'recharts';

const data = [
    { name: 'Mon', mile_stones: 300, velocity: 250 },
    { name: 'Tues', mile_stones: 280, velocity: 230 },
    { name: 'Weds', mile_stones: 200, velocity: 150 },
    { name: 'Thurs', mile_stones: 140, velocity: 140 },
    { name: 'Fri', mile_stones: 110, velocity: 110},
    { name: 'Sat', mile_stones: 100, velocity: 90 },
];

export default class Demo extends Component {

    static displayName = 'ComposedChartDemo';

    render () {
        return (
            <div className="line-charts">
                <div className="composed-chart-wrapper">
                    <ResponsiveContainer width="100%" height={300}>
                        <ComposedChart width={800} height={400} data={data}
                                       margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend layout="vertical" align="right" verticalAlign="middle"/>
                            <CartesianGrid stroke="#f5f5f5" />
                            <Tooltip />
                            <Area type="monotone" dataKey='velocity' fill="#8884d8" stroke="#8884d8" />

                            <Bar dataKey="mile_stones" barSize={20} fill="#413ea0" />

                        </ComposedChart>
                    </ResponsiveContainer>
                </div>





            </div>
        );
    }
}