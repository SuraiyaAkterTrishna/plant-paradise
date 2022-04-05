import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../utilities/useChart';

const Dashboard = () => {
    const [chart, setChart] = useChart();
    return (
        <div className='container'>
            <div class="row my-5">
                <div class="col-sm">
                    <LineChart width={500} height={250} data={chart} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Line type="monotone" dataKey='sell' stroke="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                <div class="col-sm">
                    <AreaChart width={500} height={250} data={chart}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.5} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <BarChart width={500} height={250} data={chart}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div class="col-sm">
                    <PieChart width={500} height={250}>
                        <Pie data={chart} dataKey="revenue" nameKey="revenue" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                        <Pie data={chart} dataKey="investment" nameKey="investment" cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#82ca9d" label />
                        <Tooltip content={chart} />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;