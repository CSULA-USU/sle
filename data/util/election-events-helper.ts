export interface ElectionEventProps {
  title: string;
  startDate?: string; // "2025-01-30"
  endDate?: string; // "2025-01-30"
  startTime?: string; // "11AM"
  endTime?: string; // "2PM"
  location: string;
  description: string;
}

export const filterElectionEvents = (electionEvents: ElectionEventProps[]) => {
  return electionEvents.filter((electionEvent) => {
    const today = new Date().toISOString().split("T")[0];
    return electionEvent.startDate && electionEvent.startDate > today;
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
  const date = new Date(inputDate);

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

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
};
