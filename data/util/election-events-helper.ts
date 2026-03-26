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

export const filterElectionEvents = (events: ElectionEventProps[]) => {
  const now = new Date();

  return events.filter((e) => {
    const startDate = e.startDate?.trim();
    if (!startDate) return false;
    const endDate = e.endDate?.trim() || startDate;
    const endDt = toLocalDateTime(endDate, e.endTime, true);
    return endDt >= now;
  });
};
//changes ???

const parseTimeTo24h = (time?: string) => {
  if (!time) return null;

  const trimmed = time.trim().toUpperCase();
  const match = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/);
  if (!match) return null;

  let hour = Number(match[1]);
  const minute = Number(match[2] ?? "0");
  const meridiem = match[3];

  if (meridiem === "AM" && hour === 12) hour = 0;
  if (meridiem === "PM" && hour !== 12) hour += 12;

  return { hour, minute };
};

const toLocalDateTime = (
  dateStr: string,
  timeStr?: string,
  fallbackEndOfDay = false,
) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d, 0, 0, 0, 0);

  const parsed = parseTimeTo24h(timeStr);
  if (parsed) {
    dt.setHours(parsed.hour, parsed.minute, 0, 0);
    return dt;
  }

  if (fallbackEndOfDay) {
    dt.setHours(23, 59, 59, 999);
  }

  return dt;
};

export const sortElectionEvents = (events: ElectionEventProps[]) => {
  return [...events].sort((a, b) => {
    const aDate = a.startDate?.trim();
    const bDate = b.startDate?.trim();

    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;

    return (
      toLocalDateTime(aDate, a.startTime).getTime() -
      toLocalDateTime(bDate, b.startTime).getTime()
    );
  });
};

export const formatDate = (inputDate: string | undefined) => {
  if (inputDate == undefined || inputDate.length == 0) return "";
  const [y, m, d] = inputDate.split("-").map(Number);
  const date = new Date(y, m - 1, d);

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
