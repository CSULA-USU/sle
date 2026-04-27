import { FluidContainer, Typography, Divider } from "@/components";

interface Candidate {
  name: string;
  votes: number;
  winner?: boolean;
}

interface ElectionResultsProps {
  sectionTitle: string;
  description: string;
  candidates: Candidate[];
  dark?: boolean;
  totalVotes?: number;
}

export const ElectionResults = ({
  sectionTitle,
  description,
  candidates,
  dark = false,
  totalVotes,
}: ElectionResultsProps) => {
  const totalVotesValue =
    totalVotes !== undefined
      ? totalVotes
      : candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  const textColor = dark ? "white" : "black";

  return (
    <FluidContainer
      id={sectionTitle.replace(/\s+/g, "-").toLowerCase()}
      padding="0"
    >
      <FluidContainer
        flex
        justifyContent="between"
        alignItems="end"
        padding="p-0"
      >
        <Typography variant="sectionHeader" color={textColor}>
          {sectionTitle}
        </Typography>
        <Typography className="font-bold" fontSize="xl" color={textColor}>
          Total Votes: {totalVotesValue.toLocaleString()}
        </Typography>
      </FluidContainer>

      <Divider margin="lg" />

      <Typography variant="informational" className="mb-8" color={textColor}>
        {description}
      </Typography>

      <FluidContainer flex flexDirection="col" padding="p-0">
        {candidates.map((candidate, i) => (
          <FluidContainer key={i} flex flexDirection="col">
            <FluidContainer
              flex
              justifyContent="between"
              alignItems="end"
              padding="p-0"
              margin="mt-8"
            >
              <Typography className="font-bold" fontSize="xl" color={textColor}>
                {candidate.name}
              </Typography>
              <Typography className="font-bold" fontSize="xl" color={textColor}>
                {candidate.votes.toLocaleString()}
              </Typography>
            </FluidContainer>

            <div
              className={`w-full ${dark ? "bg-white/20" : "bg-gray-200"} h-2 rounded-full overflow-hidden flex justify-start`}
            >
              <div
                className={`h-full transition-all duration-700 ${
                  candidate.winner
                    ? "bg-yellow-500"
                    : dark
                      ? "bg-gray-500"
                      : "bg-gray-400"
                }`}
                style={{
                  width: `${(candidate.votes / totalVotesValue) * 100}%`,
                }}
              />
            </div>
          </FluidContainer>
        ))}
      </FluidContainer>
    </FluidContainer>
  );
};
