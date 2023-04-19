import React from 'react';
import './CircleIcon.scss';

export default function CircleIcon({Icon}) {
  return (
    <div className="circle-icon">
      {Icon && <Icon />}
    </div>
  )
}