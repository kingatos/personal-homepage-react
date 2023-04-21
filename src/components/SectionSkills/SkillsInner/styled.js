import styled from "styled-components";
import { borderRadius, boxShadow, divider } from "../../././../theme";

export const WrapperSkills = styled.div`
  max-width: 1216px;
  left: calc(50% - 1216px / 2 + 2px);
  background-color: ${({ theme }) => theme.elementColor.skills.background};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  padding-bottom: 32px;
`;

export const Subheader = styled.h2`
  display: flex;
  align-content: center;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  text-align: left;
  letter-spacing: 0.05em;
  padding: 32px 32px 0 32px;
  color: ${({ theme }) => theme.elementColor.subheader.title};
  transition: 0.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 26px;
    line-height: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Icon = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigScreen}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Point = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 16px;
  background: ${({ theme }) => theme.elementColor.skills.point};
`;

export const SkillsList = styled.div`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: space-between;
  margin: 32px 0 0;
  grid-gap: 8px;
  padding-left: 0;
`;

export const Divider = styled.div`
  max-width: 1151px;
  height: 1px;
  margin-left: 32px;
  margin-right: 32px;
  background: ${divider};
`;

export const ListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.elementColor.skills.text};
  transition: 1s;
  margin: 0 32px;
  line-height: 1.4;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigMobile}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
