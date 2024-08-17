import { FC } from 'react';

import { IAnalystCountCardProps } from 'models/CardModels';

const AnalystCountCard: FC<IAnalystCountCardProps> = ({
  countNumber,
  countTitle,
}) => {
  return (
    <div className="h-fit w-full rounded bg-secondary p-5 text-center text-white shadow-custom_shadow">
      <p className="text-xl font-medium">{countNumber}</p>
      <p className="text-lg">{countTitle}</p>
    </div>
  );
};

export default AnalystCountCard;
