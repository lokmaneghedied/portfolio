import { HiOutlineExternalLink } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";

type EducationCardProps = {
  title: string;
  date: string;
  certificateLink?: string;
  Icon?: React.ReactElement;
};

export default function EducationCard({
  title,
  date,
  certificateLink,
  Icon,
}: EducationCardProps) {
  return (
    <div className="bg-slate rounded-[10px] border border-grayBorder flex flex-col xl:flex-row items-start justify-start gap-4 p-4">
      <div className="text-gray text-4xl">{Icon ?? <IoSchoolSharp />}</div>
      <div className="flex items-center justify-between gap-x-8 w-full">
        <span className="space-y-1">
          <h1 className="heading2">{title}</h1>
          <p className="details2 ">{date}</p>
        </span>
        {certificateLink && (
          <a href={certificateLink} target="_blank">
            <HiOutlineExternalLink className="text-gray text-3xl lg:text-2xl" />
          </a>
        )}
      </div>
    </div>
  );
}
