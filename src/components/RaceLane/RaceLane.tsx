import styled, { css } from "styled-components";
import "@/assets/fonts/jakarta/jakarta.css";

interface RaceLaneProps {
  laneNumber: number;
  name: string;
  end?: boolean;
}

export const RaceLane = ({ name, laneNumber, end = false }: RaceLaneProps) => {
  return (
    <LaneWrapper $end={end}>
      <InnerLaneWrapper>
        <LaneNumber>LANE {laneNumber}:</LaneNumber> <TeamName>{name}</TeamName>
      </InnerLaneWrapper>
    </LaneWrapper>
  );
};

const LaneWrapper = styled.div<{ $end: boolean }>`
  display: flex;
  color: white;
  width: 35vw;
  text-align: left;
  padding-top: 0.2rem;
  ${(props) =>
    props.$end
      ? css`
          padding-bottom: 0.4rem;
        `
      : css`
          padding-bottom: 0.2rem;
        `};

  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 6%,
    rgba(0, 0, 0, 0.5) 10%,
    rgba(0, 0, 0, 1) 13%
  );
`;

const InnerLaneWrapper = styled.div`
  width: calc(35vw - 1.7rem);
  padding: 0.2rem 0.3rem 0.3rem 1.4rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 3, 98, 0.5) 3%,
    rgba(0, 9, 98, 1) 8%
  );
`;

const LaneNumber = styled.span`
  display: inline-block;
  font-family: "Plus Jakarta Sans 400";
  font-size: calc(0.6vw + 12px);
  text-align: left;
  width: 18%;
  text-align: right;
`;

const TeamName = styled.span`
  display: inline-block;
  font-family: "Plus Jakarta Sans 800";
  font-size: calc(0.9vw + 16px);
  padding-left: 0.5rem;
`;
