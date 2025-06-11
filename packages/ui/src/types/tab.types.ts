export interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface BaseTabProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export interface StyledTabProps extends BaseTabProps {
  variant?: 'rounded' | 'underline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
}