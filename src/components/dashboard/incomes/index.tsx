'use client';

import formatNumberWithCurrency from '@/lib/methods/formatNumberWithCurrency';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { DashboardItemWrapper } from '../dashbord-item-wrapper';

function getRandomNumber() {
  return Math.floor(Math.random() * 5000) + 1000;
}

const data = [
  { name: 'Jan', total: getRandomNumber() },
  { name: 'Feb', total: getRandomNumber() },
  { name: 'Mar', total: getRandomNumber() },
  { name: 'Apr', total: getRandomNumber() },
  { name: 'May', total: getRandomNumber() },
  { name: 'Jun', total: getRandomNumber() },
  { name: 'Jul', total: getRandomNumber() },
  { name: 'Aug', total: getRandomNumber() },
  { name: 'Sep', total: getRandomNumber() },
  { name: 'Oct', total: getRandomNumber() },
  { name: 'Nov', total: getRandomNumber() },
  { name: 'Dec', total: getRandomNumber() },
];

export function Incomes() {
  return (
    <DashboardItemWrapper title="Incomes">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => formatNumberWithCurrency(value)}
          />
          <Bar dataKey="total" fill="rgb(51, 65, 85)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardItemWrapper>
  );
}
