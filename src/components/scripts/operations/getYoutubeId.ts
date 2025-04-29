export const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:shorts\/|embed\/|watch\?v=|v\/|u\/\w\/))([^#&?]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};