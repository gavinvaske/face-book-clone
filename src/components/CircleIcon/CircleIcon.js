import React from 'react';
import './CircleIcon.scss';

export default function CircleIcon({Icon, className}) {
  return (
    <div className={`circle-icon ${className}`}>
      {Icon && <Icon />}
    </div>
  )
}