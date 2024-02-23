import localFont from "next/font/local";

const IBMPlexMonoFont = localFont({
  src: [
    {
      path: "./IBMPlexMono/IBMPlexMono-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./IBMPlexMono/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./IBMPlexMono/IBMPlexMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

const EBGaramondFont = localFont({
  src: [
    {
      path: "./EBGaramond/EBGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const ForumFont = localFont({
  src: [
    {
      path: "./Forum/Forum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export { IBMPlexMonoFont, EBGaramondFont, ForumFont };
