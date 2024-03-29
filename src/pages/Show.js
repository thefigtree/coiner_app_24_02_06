import { useEffect } from "react";
import { ShowStore } from "../stores/ShowStore";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export const Show = () => {
  const store = ShowStore();
  const params = useParams();

  useEffect(() => {
    try {
      store.fetchData(params.id);
    } catch (error) {
      console.log("에러" + error);
    }
  }, []);

  if (!store.data) return <></>;

  return (
    <div>
      <header>
        <img src={store.data.image.large}></img>
        <h2>
          {store.data.name} ({store.data.symbol})
        </h2>
      </header>

      <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1.5">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="Price"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
      <div>
        <h4>Market Cap Rank</h4>
        <span>{store.data.market_cap_rank}</span>
      </div>
      <div>
        <h4>24h High</h4>
        <span>${store.data.market_data.high_24h.usd}</span>
      </div>
      <div>
        <h4>24h Low</h4>
        <span>${store.data.market_data.low_24h.usd}</span>
      </div>
      <div>
        <h4>Circulating Supply</h4>
        <span>${store.data.market_data.circulating_supply}</span>
      </div>
      <div>
        <h4>Current Price</h4>
        <span>${store.data.market_data.current_price.usd}</span>
      </div>
      <div>
        <h4>1y Change</h4>
        <span>
          {store.data.market_data.price_change_percentage_1y.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};
