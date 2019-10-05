import React from 'react';
import { IconType } from 'react-icons/lib/cjs';

interface IProps {
  icon: IconType;
  className: string;
  id: string;
  onClick: () => void;
}

const MyIcon = (props: IProps) => {
  const { icon, ...others } = props;
  return React.createElement(icon, others);
};

export default MyIcon;
