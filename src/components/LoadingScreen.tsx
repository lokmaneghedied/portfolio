export default function LoadingScreen() {
  return (
    <section className="h-dvh w-full flex justify-center items-center">
      <div className="w-40 h-40 relative flex items-center justify-center">
        <div className="absolute w-full h-full rounded-3xl blur-sm bg-gradient-to-br from-[#6400e6] to-[#eba5ff] animate-loading"></div>
        <div className="absolute w-full h-full rounded-3xl z-10 bg-offWhite/10 border border-white/30"></div>
      </div>
    </section>
  );
}
