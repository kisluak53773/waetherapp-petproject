import React from 'react';
import Skeleton from './Skeleton';

export default function DetailsSkeleton() {
  return (
    <div role="detailsSkeleton" className="details">
      <div className="details__items">
        <span className="details__items-item">
          <Skeleton classes={'skeleton__item'} />
        </span>
        <span className="details__items-item">
          <Skeleton classes={'skeleton__item'} />
        </span>
        <span className="details__items-item">
          <Skeleton classes={'skeleton__item'} />
        </span>
        <span className="details__items-item">
          <Skeleton classes={'skeleton__item'} />
        </span>
      </div>
    </div>
  );
}
