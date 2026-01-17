import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ChartTest = () => {
  const data = [
    { name: 'A', value: 30, color: '#00D4FF' },
    { name: 'B', value: 40, color: '#8A2BE2' },
    { name: 'C', value: 30, color: '#FFD700' }
  ];

  return (
    <div className="w-full h-64 bg-gray-100 p-4">
      <h3 className="text-lg font-bold mb-4">Chart Test</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTest;
