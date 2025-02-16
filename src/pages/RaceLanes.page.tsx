import { RaceLanesOverlay } from "@/components/RaceLanesOverlay/RaceLanesOverlay";
import styled from "styled-components";

export const RaceLanesPage = () => {
  return (
    <ScreenWrapper>
      <RaceLanesOverlay
        raceName={"Norcal Scrimmage 2025"}
        teamNames={["Norcal Crew", "Los Gatos Rowing Club"]}
      />
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.div`
  width: 100wv;
  height: 100vh;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;
