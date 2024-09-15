import SchoolIcon from "@/assets/svg/SchoolIcon.svg";
import ExternalLink from "@/assets/svg/ExternalLink.svg";

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
      <div>{Icon ?? <SchoolIcon />}</div>
      <div className="flex items-center justify-between gap-x-8 w-full">
        <span className="space-y-1">
          <h1 className="heading2">{title}</h1>
          <p className="details2 ">{date}</p>
        </span>
        {certificateLink && (
          <a href={certificateLink} target="_blank">
            <ExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}
