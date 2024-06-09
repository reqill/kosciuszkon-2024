import { DateTimeBar } from "../components/DataTimeBar/DataTimeBar";
import { NewsBar } from "../components/NewsBar/NewsBar";
import { ScheduleTab } from "../components/ScheduleTab/ScheduleTab";

export const WidgetsPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-semibold">Widgets</h1>
      <DateTimeBar />
      <NewsBar /> <ScheduleTab />
    </div>
  );
};
