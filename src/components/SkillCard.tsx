type SkillCardProps = {
  title: string;
  description: string;
  Icon: React.ReactElement;
};

export default function SkillCard({
  title,
  description,
  Icon,
}: SkillCardProps) {
  return (
    <div className="rounded-[10px] border border-grayBorder flex items-center justify-start gap-4 p-4 w-full">
      <span>{Icon}</span>
      <span className="flex flex-col justify-center gap-y-1 w-2/3 xl:w-full">
        <h1 className="details1 xl:heading2 text-white truncate">{title}</h1>
        <p className="details2 hidden md:block">{description}</p>
      </span>
    </div>
  );
}
