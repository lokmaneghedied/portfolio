import { useEffect } from "react";

type PicturesGridProps = {
  pictures: string[];
};

function generatePatternSequence(length: number): number[] {
  const result: number[] = [];
  for (let i = 1; i <= length; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      result.push(1);
    } else {
      result.push(2);
    }
  }
  return result;
}

export default function PicturesGrid({ pictures }: PicturesGridProps) {
  const rowsSpans = generatePatternSequence(pictures.length);
  useEffect(() => {
    const pictures = document.getElementById("pictures")?.cloneNode(true);
    document.getElementById("pictures-carousel")?.appendChild(pictures as Node);
  }, []);
  return (
    <div
      id="pictures-carousel"
      className="w-fit max-w-full relative flex gap-4 overflow-hidden h-[35rem] before:content-[''] before:absolute before:top-0 before:left-0 before:w-40 before:h-full before:z-10 before:bg-gradient-to-l before:from-transparent before:to-dark after:content-[''] after:absolute after:top-0 after:right-0 after:w-40 after:h-full after:z-10 after:bg-gradient-to-r after:from-transparent after:to-dark "
    >
      <div
        id="pictures"
        className="grid grid-rows-3 grid-flow-col gap-4 w-fit animate-slide"
      >
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`bg-slate rounded-[26px] border border-grayBorder p-4 col-span-1 w-fit ${
              rowsSpans[index] === 1 ? "row-span-1" : "row-span-2"
            }`}
          >
            <div className="overflow-hidden rounded-[10px] bg-offWhite w-60 h-full flex justify-center">
              <img
                src={picture}
                alt="Project image"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
