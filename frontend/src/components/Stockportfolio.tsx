import { StepBack, Frown, Meh, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
    Line
} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);


interface PortfolioPoint {
    date: string;
    value: number;
}

const STARTING_VALUE = 1000;

function getMoodStatus(currentValue: number | null) {

    if (currentValue === null) {
        return null;
    }

    const percentChange = ((currentValue - STARTING_VALUE) / STARTING_VALUE) * 100;

    if (currentValue < STARTING_VALUE) {
        return {
            Icon: Frown,
            label: "my stocks arent doing so good right now"
        };
    }

    if (percentChange < 5) {
        return {
            Icon: Meh,
            label: "my stocks are doing ok right now"
        };
    }

    return {
        Icon: Smile,
        label: "my stocks are doing good right now"
    };
}


export default function StockPortfolio() {

    const navigate = useNavigate();

    const [stocks, setStocks] = useState<string[]>([]);
    const [history, setHistory] = useState<PortfolioPoint[]>([]);


    useEffect(() => {

        async function loadData() {

            const stocksResponse = await fetch(
                "/output.json", {cache: "no-store"});

            const stocksJson = await stocksResponse.json();

            const stocksData = stocksJson.map((stock: Record<string, number>) => Object.keys(stock)[0]);

            const historyResponse = await fetch(
                "/portfolio_history.json", {cache: "no-store"});

            const historyData = await historyResponse.json();

            setStocks(stocksData);
            setHistory(historyData);
        }


        loadData();

    }, []);

    const currentValue = history.length > 0 ? history[history.length - 1].value : null;
    const mood = getMoodStatus(currentValue);

    const chartData = {
        labels: history.map(item => item.date),
        datasets: [
            {
                label: "Portfolio Value ($)", 
                data: history.map(item => item.value), 
                tension: 0.3,
                borderColor: "black",
                backgroundColor: "black",
                pointBackgroundColor: "black",
                pointBorderColor: "black"
            }
        ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
  
      plugins: {
          legend: {
              display: true
          }
      },
  
      scales: {
          x: {title: {
                  display: true,
                  text: "Timeline"
              }
          },
          y: {title: {
                  display: true,
                  text: "Portfolio Value"
              },
              ticks: {
                  callback: function(value: any) {
                      return `$${value}`;
                  }
              }
          }
      }
  };
    return (

      <div className="stock-portfolio-page">

              <div
                  className="contact-return-to-home"
                  onClick={() => navigate("/")}
              >
                  <StepBack size={28}/>
                  back to home
              </div>

              {mood && (
                  <div className="portfolio-mood">
                      <mood.Icon size={28} />
                      <span>{mood.label}</span>
                  </div>
              )}

          <div className="portfolio-container">
              <div className="portfolio-chart">
                  <Line
                    data={chartData}
                    options={chartOptions}
                  />
              </div>

              <div className="holdings-container">
                  <h2>
                      Current Holds
                  </h2>
  
                  <ul className="holdings-list">
  
                      {stocks.map(stock =>
                      <li 
                      key={stock}>{stock}
                      </li>)}
                  </ul>
              </div>
          </div>
          <div className="about-algo">
                <details>
                  <summary>
                    This algo takes into factors of RSI, different period growth rates, P/E ratio, P/B Ratio, Volume, and AI driven analytics to analyze a stocks anticipated performance.
                  </summary>
                </details>
          </div>
      </div>
  );
}