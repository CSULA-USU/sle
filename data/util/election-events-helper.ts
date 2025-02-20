export interface ElectionEventProps {
  title: string;
  startDate?: string; // "2025-01-30"
  endDate?: string; // "2025-01-30"
  startTime?: string; // "11AM"
  endTime?: string; // "2PM"
  location: string;
  description: string;
  highlight?: boolean;
}

export const filterElectionEvents = (electionEvents: ElectionEventProps[]) => {
  return electionEvents.filter((electionEvent) => {
    const today = new Date().toISOString().split("T")[0];
    if (electionEvent.endDate) {
      return electionEvent.endDate > today;
    } else if (electionEvent.startDate) {
      return electionEvent.startDate > today;
    }
    return false;
  });
};

export const sortElectionEvents = (electionEvents: ElectionEventProps[]) => {
  electionEvents.sort(
    (a, b) =>
      new Date(a.startDate || "9999-00-00").getTime() -
      new Date(b.startDate || "9999-00-00").getTime(),
  );
};

export const formatDate = (inputDate: string | undefined) => {
  if (inputDate == undefined || inputDate.length == 0) return "";
  const date = new Date(inputDate + "T00:00:00Z");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const month = monthsOfYear[date.getUTCMonth()];
  const dayOfMonth = date.getUTCDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
};
