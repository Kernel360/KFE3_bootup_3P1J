// 기본 익스포트
export { default } from './CustomInput';

// 개별 컴포넌트 익스포트
export { default as BaseInput } from './BaseInput';
export { default as IconInput } from './IconInput';
export { default as CustomInput } from './CustomInput';

// 아이콘 익스포트 (필수 아이콘만)
export { 
  UserIcon, 
  SearchIcon, 
  EyeIcon, 
  EyeOffIcon
} from './icons';

// 타입 익스포트
export type {
  InputVariant,
  InputState,
  InputSize,
  IconPosition,
  BaseInputProps,
  IconInputProps,
  CustomInputProps
} from '../types/input.types';

// 유틸리티 익스포트
export { cn } from '../lib/utils';