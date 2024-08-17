import React from 'react';

import { ICardHeadingProps } from 'models/CardModels';

const CardHeading: React.FC<ICardHeadingProps> = ({ title }) => {
  return <h2 className="font-medium uppercase">{title}</h2>;
};

export default CardHeading;
