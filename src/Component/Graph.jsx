import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PopulationGraph = () => {
    const [populationData, setPopulationData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            const data = await response.json();
            setPopulationData(data.data);
        };
        fetchData();
    }, []);

    if (!populationData) {
        return <div>Loading...</div>;
    }

    const usPopulationData = populationData.filter(entry => entry.Nation === 'United States');
    const chartData = usPopulationData.map(entry => ({
        name: entry.Year,
        population: entry.Population,
    }));

    return (
        <div className='my-5'>
        <h3>Task 2</h3>
        <ResponsiveContainer width="100%" height={400} >
            <LineChart
                data={chartData}
                margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="population"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default PopulationGraph;
