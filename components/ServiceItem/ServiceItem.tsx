import { Service } from "../../constants/services";

export interface ServiceItemProps {
  service: Service;
}

export const ServiceItem = ({ service: { title, description } }: ServiceItemProps) => {
  return (
    <div>
      <p className="text-xl font-semibold text-secondary">
        {title}
      </p>
      <p className="mt-3 text-base">
        {description}
      </p>
    </div>
  );
};
