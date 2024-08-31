import gsap from 'gsap';

type ImageSequenceConfig = {
  urls: string[];
  canvas: HTMLCanvasElement | string;
  clear?: boolean;
  scrollTrigger?: ScrollTrigger.StaticVars;
  paused?: boolean;
  fps?: number;
  onUpdate?: (index: number, image: HTMLImageElement) => void;
};

const imageSequence = (
  config: ImageSequenceConfig
): gsap.core.Tween | undefined => {
  let playhead = { frame: 0 },
    canvas =
      typeof config.canvas === 'string'
        ? document.querySelector<HTMLCanvasElement>(config.canvas)
        : config.canvas;

  if (!canvas) {
    console.warn('Canvas not defined');
    return;
  }

  let ctx = canvas.getContext('2d'),
    curFrame = -1,
    onUpdate = config.onUpdate,
    images: HTMLImageElement[];

  const updateImage = () => {
    let frame = Math.round(playhead.frame);
    if (frame !== curFrame && ctx) {
      if (config.clear) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(images[frame], 0, 0);
      curFrame = frame;
      if (onUpdate) {
        onUpdate(frame, images[frame]);
      }
    }
  };

  images = config.urls.map((url, i) => {
    let img = new Image();
    img.src = url;
    if (i === 0) {
      img.onload = updateImage;
    }
    return img;
  });

  return gsap.to(playhead, {
    frame: images.length - 1,
    ease: 'none',
    onUpdate: updateImage,
    duration: images.length / (config.fps || 30),
    paused: !!config.paused,
    scrollTrigger: config.scrollTrigger,
  });
};

export default imageSequence;
