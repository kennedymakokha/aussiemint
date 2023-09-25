import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { faker } from '@faker-js/faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Estimated Prices',
        },
    },
};

const labels = ['June', 'July', 'August', 'September'];
const dataDe = [{
    "timestamp": 1695629281,
    "metal": "XAU",
    "currency": "USD",
    "exchange": "FOREXCOM",
    "symbol": "FOREXCOM:XAUUSD",
    "prev_close_price": 1925.26,
    "open_price": 1925.26,
    "low_price": 1920.96,
    "high_price": 1927.23,
    "open_time": 1695600000,
    "price": 1923.51,
    "ch": -1.75,
    "chp": -0.09,
    "ask": 1923.81,
    "bid": 1923.22,
    "price_gram_24k": 61.8423,
    "price_gram_22k": 56.6888,
    "price_gram_21k": 54.112,
    "price_gram_20k": 51.5352,
    "price_gram_18k": 46.3817,
    "price_gram_16k": 41.2282,
    "price_gram_14k": 36.0747,
    "price_gram_10k": 25.7676
},
{
    "timestamp": 1695629281,
    "metal": "XAU",
    "currency": "USD",
    "exchange": "FOREXCOM",
    "symbol": "FOREXCOM:XAUUSD",
    "prev_close_price": 1925.26,
    "open_price": 1925.26,
    "low_price": 1920.96,
    "high_price": 1927.23,
    "open_time": 1695600000,
    "price": 1923.51,
    "ch": -1.75,
    "chp": -0.09,
    "ask": 1923.81,
    "bid": 1923.22,
    "price_gram_24k": 61.8423,
    "price_gram_22k": 56.6888,
    "price_gram_21k": 54.112,
    "price_gram_20k": 51.5352,
    "price_gram_18k": 46.3817,
    "price_gram_16k": 41.2282,
    "price_gram_14k": 36.0747,
    "price_gram_10k": 25.7676
}]
export const data = {
    labels,
    datasets: [
        {
            label: 'Gold',
            data: labels.map(() => faker.datatype.number({ min: 1920.96, max: 1925.96 })),
            borderColor: '#d2ac67',
            backgroundColor: 'white',
        },
        {
            label: 'silver',
            data: labels.map(() => faker.datatype.number({ min: 1910, max: 1930 })),
            borderColor: ' #808080',
            backgroundColor: 'white',
        },
    ],
};

export default function App() {
    return <Line options={options} data={data} />;
}
