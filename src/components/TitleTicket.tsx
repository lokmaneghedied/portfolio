type TitleTicketProps = {
  title: string;
  Icon: React.ReactElement;
};

export default function TitleTicket({ title, Icon }: TitleTicketProps) {
  return (
    <div className="px-4 py-2 rounded-full border border-grayBorder flex items-center justify-center gap-x-3 text-[#9D9D9F] w-fit">
      {Icon}
      <p className="text-base font-semibold">{title}</p>
    </div>
  );
}
