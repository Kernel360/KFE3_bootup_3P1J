// 기본 익스포트 (가장 많이 사용될 컴포넌트)
export { default } from './CustomButton';

// 개별 컴포넌트 익스포트
export { default as BaseButton } from './BaseButton';
export { default as CustomButton } from './CustomButton';

// 타입 익스포트
export type {
  ButtonVariant,
  ButtonSize,
  BaseButtonProps
} from '../types/button.types';