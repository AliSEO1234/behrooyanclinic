const VideoPlayerCom = () => {
  return (
    <div className="w-full h-full s1280:h-screen absolute top-0 left-0 z-[2]">
      <video
        autoPlay
        muted
        loop={true}
        playsInline
        className="w-full object-cover h-full"
        src="/videos/videoHealth1.mp4"
      ></video>
    </div>
  );
};
export default VideoPlayerCom;
