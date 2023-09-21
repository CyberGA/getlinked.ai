import localFont from "next/font/local";

const clash_display = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
  fallback: ["sans-serif", "arial" ],
  preload: true,
  variable: "--font-clash"
});

export { clash_display };
