type TitleTicketProps = {
  title: string;
  icon: React.ReactNode;
};

export default function TitleTicket({ title, icon }: TitleTicketProps) {
  return (
    <div className="px-4 py-2 rounded-full border border-grayBorder flex items-center justify-center gap-x-3">
      {icon}
      <p className="text-base font-semibold text-[#9D9D9F] ">{title}</p>
    </div>
  );
}
