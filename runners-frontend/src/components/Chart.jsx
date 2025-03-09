import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
                setData(result.chart_data);
            } catch (err) {
                setError('Failed to load data. Try again later.');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);
    if (loading) return <div className="text-center p-8">Loading data...</div>;
    if (error) return <div className="text-center text-red-500 p-8">{error}</div>;

    return (
        <div className="w-full h-96 bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Sample data visualization</h2>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
