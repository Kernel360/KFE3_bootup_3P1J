// 기본 익스포트
export { default } from './CustomTab';

// 개별 컴포넌트 익스포트
export { default as BaseTab } from './BaseTab';
export { default as StyledTab } from './StyledTab';
export { default as CustomTab } from './CustomTab';

// 타입 익스포트
export type {
  TabItem,
  BaseTabProps,
  StyledTabProps
} from '../types/tab.types';