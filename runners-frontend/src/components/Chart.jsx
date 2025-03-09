import { useState, useEffect} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { fetchData } from '../services/api';

const Chart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const result = await fetchData();
                setData(result.chartData);
            } catch (err) {
                setError('Failed to load data. Try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    if (loading) return <div className="text-center p-8">Loading data...</div>;
    if (error) return <div className="text-center test-red-500 p-8">{error}</div>;

    return (
        <div className="w-full h-96 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Sample data visualization</h2>
        <ResponsiveContainer width="100%" height="80%">
        <BarChart>
        <CartesianGrid strokeDasharray='3 3'/>
        <XAxis datakey="name"/>
        <YAxis />
        <Tooltip/>
        <Bar datakey="value" fill="#8884d8"/> 
        </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Chart;
