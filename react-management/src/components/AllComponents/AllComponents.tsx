import { DateTimeBar } from "../DataTimeBar/DataTimeBar";
import { NewsBar } from "../NewsBar/NewsBar";
import { ScheduleTab } from "../ScheduleTab/ScheduleTab";
import { WeatherBar } from "../WeatherBar/WeatherBar";

export const AllComponents = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-2xl font-semibold">Widgets</h1>
      <DateTimeBar />
      <div className="flex flex-row gap-2">
        <NewsBar />
        <WeatherBar />
      </div>
      <ScheduleTab />
    </div>
  );
};
