import { Link } from "react-router-dom";
import { DateTimeBar } from "../components/DataTimeBar/DataTimeBar";
import { NewsBar } from "../components/NewsBar/NewsBar";
import { ScheduleTab } from "../components/ScheduleTab/ScheduleTab";
import { WeatherBar } from "../components/WeatherBar/WeatherBar";

export const WidgetsPage = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-2xl font-semibold">Widgets</h1>
      <Link to="/widgets/date-time-bar">
        <DateTimeBar />
      </Link>
      <div className="flex flex-row gap-2">
        <Link to="/widgets/news-bar">
          <NewsBar />
        </Link>
        <Link to="/widgets/weather-bar">
          <WeatherBar />
        </Link>
      </div>
      <Link to="/widgets/schedule-tab">
        <ScheduleTab />
      </Link>
    </div>
  );
};
