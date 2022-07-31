import Image from 'next/image';
import { techlist } from '../../constants/techlist';

export const TechList = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {techlist.map(tech => (
        <div key={tech.name} className="w-24 flex flex-col items-center gap-2">
          <Image
            src={tech.img}
            alt={`${tech.name} icon`}
            className="h-16 w-16"
            width={64}
            height={64}
          />
          <p className="text-center">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
