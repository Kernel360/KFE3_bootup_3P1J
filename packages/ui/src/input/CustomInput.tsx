import React, { forwardRef, useState } from 'react';
import BaseInput from './BaseInput';
import IconInput from './IconInput';
import { CustomInputProps } from './types';
import { UserIcon, SearchIcon, EyeIcon, EyeOffIcon } from './icons';

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ variant = 'basic', type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    // Variant별 구성 정의
    const variantConfig = {
      basic: {
        component: BaseInput,
        props: {}
      },
      user: {
        component: IconInput,
        props: {
          iconPosition: 'left' as const,
          leftIcon: <UserIcon />
        }
      },
      search: {
        component: IconInput,  
        props: {
          iconPosition: 'left' as const,
          leftIcon: <SearchIcon />
        }
      },
      password: {
        component: IconInput,
        props: {
          iconPosition: 'right' as const,
          rightIcon: showPassword ? <EyeOffIcon /> : <EyeIcon />,
          onIconClick: () => setShowPassword(!showPassword),
          type: showPassword ? 'text' : 'password'
        }
      }
    };

    const config = variantConfig[variant];
    const Component = config.component;

    return (
      <Component
        ref={ref}
        type={variant === 'password' ? (showPassword ? 'text' : 'password') : type}
        {...config.props}
        {...props}
      />
    );
  }
);

CustomInput.displayName = 'CustomInput';
export default CustomInput;