import { css } from "styled-components";
import { Theme } from "./type";

const TextSmBold = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.sm.fontSize};
  line-height: ${props.theme.typograph.sm.fontSize};
  font-weight: ${props.theme.typograph.bold};
`;

const TextMdBold = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.md.fontSize};
  line-height: ${props.theme.typograph.md.fontSize};
  font-weight: ${props.theme.typograph.bold};
`;

const TextXlBold = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.xl.fontSize};
  line-height: ${props.theme.typograph.xl.fontSize};
  font-weight: ${props.theme.typograph.bold};
`;

const TextSmSemibold = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.sm.fontSize};
  line-height: ${props.theme.typograph.sm.fontSize};
  font-weight: ${props.theme.typograph.semiBold};
`;

const TextMdSemibold = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.md.fontSize};
  line-height: ${props.theme.typograph.md.fontSize};
  font-weight: ${props.theme.typograph.semiBold};
`;

const TextXlSemibold = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.xl.fontSize};
  line-height: ${props.theme.typograph.xl.fontSize};
  font-weight: ${props.theme.typograph.semiBold};
`;

const TextSmMedium = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.sm.fontSize};
  line-height: ${props.theme.typograph.sm.fontSize};
  font-weight: ${props.theme.typograph.medium};
`;

const TextMdMedium = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.md.fontSize};
  line-height: ${props.theme.typograph.md.fontSize};
  font-weight: ${props.theme.typograph.medium};
`;

const TextXlMedium = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.xl.fontSize};
  line-height: ${props.theme.typograph.xl.fontSize};
  font-weight: ${props.theme.typograph.medium};
`;

const TextSmRegular = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.sm.fontSize};
  line-height: ${props.theme.typograph.sm.fontSize};
  font-weight: ${props.theme.typograph.regular};
`;

const TextMdRegular = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.md.fontSize};
  line-height: ${props.theme.typograph.md.fontSize};
  font-weight: ${props.theme.typograph.regular};
`;

const TextXlRegular = (props: { theme: Theme }) => css`
  font-size: ${props.theme.typograph.xl.fontSize};
  line-height: ${props.theme.typograph.xl.fontSize};
  font-weight: ${props.theme.typograph.regular};
`;

export {
  TextSmBold,
  TextMdBold,
  TextXlBold,
  TextSmSemibold,
  TextMdSemibold,
  TextXlSemibold,
  TextSmMedium,
  TextMdMedium,
  TextXlMedium,
  TextSmRegular,
  TextMdRegular,
  TextXlRegular,
};
