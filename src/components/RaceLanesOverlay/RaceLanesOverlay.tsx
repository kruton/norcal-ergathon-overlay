import styled from "styled-components";
import "@/assets/fonts/jakarta/jakarta.css";
import { RaceLane } from "../RaceLane/RaceLane";

interface RaceLanesOverlayProps {
  raceName: string;
  teamNames: string[];
}

export const RaceLanesOverlay = ({
  raceName,
  teamNames,
}: RaceLanesOverlayProps) => {
  return (
    <OuterWrapper>
      <RaceName>{raceName}</RaceName>
      {teamNames.map((team, index) => (
        <RaceLane
          key={index}
          laneNumber={index + 1}
          name={team}
          end={index === teamNames.length - 1}
        />
      ))}
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  color: white;
  width: 35vw;
`;

const RaceName = styled.div`
  width: calc(100% - (1rem + 1rem + 13%));
  font-size: calc(0.9vw + 16px);
  font-family: "Plus Jakarta Sans 600";
  text-align: center;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: calc(1rem + 13%);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 6%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 1) 13%
  );
`;
