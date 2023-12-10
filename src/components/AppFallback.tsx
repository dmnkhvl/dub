export default function AppFallback() {
  const YOUTUBE_URL = "https://www.youtube.com/watch?v=l0U7SxXHkPY";

  return (
    <div className=" flex flex-col items-center justify-center">
      <p className="text-white/20">u sure u have startup </p>
      <a href={YOUTUBE_URL} className="pt-24" target="_blank">
        music
      </a>
    </div>
  );
}
