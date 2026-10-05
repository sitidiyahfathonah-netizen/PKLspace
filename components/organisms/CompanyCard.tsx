import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

type CompanyCardProps = {
  name: string;
  logo: string;
  description: string;
  major: string;
};

const CompanyCard = ({
  name,
  logo,
  description,
  major,
}: CompanyCardProps) => {
  return (
    <article className="w-[280px] shrink-0 rounded-xl border border-[#5274C7] bg-[#EAF0FF] p-4">
      
      {/* Logo */}
      <div className="flex h-[160px] items-center justify-center rounded-lg border border-[#8FA5D8] bg-white p-4">
        <img
          src={logo}
          alt={`Logo ${name}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Informasi */}
      <div className="mt-4">
        <h3 className="text-base font-semibold text-[#1D376F]">
          {name}
        </h3>

        <p className="mt-2 min-h-[48px] text-xs leading-relaxed text-[#5F6470]">
          {description}
        </p>

        <div className="mt-3">
          <Badge label={major} />
        </div>

        <div className="mt-4">
          <Button label="Detail" />
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;