import { useEffect } from "react";

// Module-level registry persists across renders and components.
const registry = new Set<HTMLVideoElement>();

function handlePlay(this: HTMLVideoElement) {
  registry.forEach((other) => {
    if (other !== this && !other.paused) {
      try {
        other.pause();
      } catch {
        // no-op
      }
    }
  });
}

export function registerVideo(video: HTMLVideoElement | null): () => void {
  if (!video) return () => {};
  if (!registry.has(video)) {
    registry.add(video);
    video.addEventListener("play", handlePlay);
  }
  return () => {
    if (registry.has(video)) {
      video.removeEventListener("play", handlePlay);
      registry.delete(video);
    }
  };
}

/**
 * Registers a video element with the global manager so that whenever it
 * starts playing, all other registered videos are paused automatically.
 *
 * Usage:
 *   const videoRef = useRef<HTMLVideoElement>(null);
 *   useVideoManager(videoRef);
 */
export function useVideoManager(
  ref: React.RefObject<HTMLVideoElement | null>,
): void {
  useEffect(() => {
    const cleanup = registerVideo(ref.current);
    return cleanup;
  }, [ref]);
}

export default useVideoManager;
