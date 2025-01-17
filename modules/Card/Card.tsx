import {
  ElectionEventProps,
  formatDate,
} from "@/data/util/election-events-helper";
import { Typography } from "../../components";

export const Card = ({
  electionEvent,
  inverted = false,
}: {
  electionEvent: ElectionEventProps;
  inverted?: boolean;
}) => {
  return (
    <div
      className={`${
        inverted ? "bg-white" : "bg-black"
      } p-6 my-4 min-h-[240px] max-md:min-w-full max-md:min-h-0 border border-neutral-700`}
    >
      <div className="mb-4 lg:3/8 flex flex-col">
        <div className="h-5/8 flex items-center">
          <Typography variant="cardHeader" color={inverted ? "black" : "white"}>
            {electionEvent.title}
          </Typography>
        </div>
        {electionEvent.startDate && (
          <Typography
            variant="copy"
            color={inverted ? "black" : "white"}
            fontWeight="bold"
          >
            {formatDate(electionEvent.startDate)}
            {electionEvent.endDate &&
              electionEvent.endDate != electionEvent.startDate &&
              ` - ${formatDate(electionEvent.endDate)}`}
          </Typography>
        )}
        {electionEvent.startTime && (
          <Typography
            variant="copy"
            color={inverted ? "black" : "white"}
            fontWeight="bold"
          >
            {electionEvent.startTime}
            {electionEvent.endTime && ` to ${electionEvent.endTime}`}
          </Typography>
        )}
        {electionEvent.location && (
          <Typography
            variant="copy"
            color={inverted ? "black" : "white"}
            fontWeight="bold"
          >
            @{electionEvent.location}
          </Typography>
        )}
      </div>
      <Typography variant="copy" color={inverted ? "black" : "white"}>
        {electionEvent.description}
      </Typography>
    </div>
  );
};
