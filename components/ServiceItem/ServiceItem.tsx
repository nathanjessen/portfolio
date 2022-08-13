import { Service } from '../../constants/services';

export interface ServiceItemProps {
  item: Service;
}

export const ServiceItem = ({
  item: { title, description },
}: ServiceItemProps) => {
  return (
    <div>
      <p className='text-xl font-semibold text-secondary'>{title}</p>
      <p className='mt-3 text-base'>{description}</p>
    </div>
  );
};
