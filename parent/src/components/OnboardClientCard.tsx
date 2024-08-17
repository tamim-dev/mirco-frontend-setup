import clsx from 'clsx';
import { FC } from 'react';

import { IBankMspCardProps } from 'models/CardModels';

const OnboardClientCard: FC<IBankMspCardProps> = ({
  name,
  count,
  image,
  isLast,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between pb-2',
        !isLast && 'border-b',
      )}
    >
      <div className="flex gap-2">
        <img src={image} />
        <div>
          <p>{name}</p>
          <p>{count}</p>
        </div>
      </div>
      <button className="rounded bg-primary px-3 py-1.5 text-white">
        View
      </button>
    </div>
  );
};

export default OnboardClientCard;
