const videoRegistry = new Set<HTMLVideoElement>();

export function registerVideo(video: HTMLVideoElement) {
  videoRegistry.add(video);
  return () => videoRegistry.delete(video);
}

export function pauseAllExcept(current: HTMLVideoElement) {
  videoRegistry.forEach((video) => {
    if (video !== current && !video.paused) {
      video.pause();
    }
  });
}
