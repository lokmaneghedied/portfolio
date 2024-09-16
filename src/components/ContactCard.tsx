type ContactCardProps = {
  title: string;
  Icon: React.ReactElement;
  handleClick?: () => void;
};

export default function ContactCard({
  title,
  Icon,
  handleClick,
}: ContactCardProps) {
  return (
    <div
      className="rounded-[10px] border border-grayBorder flex items-center justify-start gap-4 p-4 w-full cursor-pointer hover:bg-slate"
      onClick={handleClick}
    >
      <span>{Icon}</span>
      <h1 className="details1 xl:heading2 text-white truncate">{title}</h1>
    </div>
  );
}
