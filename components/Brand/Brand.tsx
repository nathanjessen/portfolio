import Image from "next/image";
import Link from "next/link";
import User from "../../constants/User";

export const Brand = () => {
  return (
    <div className="flex items-center">
      <Link href="/" aria-label="Home" className="btn btn-ghost normal-case text-xl -ml-4">
        {User.avatarUrl && (
          <Image
            className="mr-2 h-8 w-auto rounded-full"
            src={User.avatarUrl}
            alt={User.name}
            width={32}
            height={32}
          />
        )}
        N10N
      </Link>
    </div>
  );
};
