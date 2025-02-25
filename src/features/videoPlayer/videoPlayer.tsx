const VideoPlayerCom = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <video
        autoPlay
        muted
        loop={true}
        playsInline
        className="w-full object-cover h-full"
        src="/videos/videoHealth.mp4"
      ></video>
    </div>
  );
};
export default VideoPlayerCom;
