function createWebGL() {
  const canvas = document.createElement('canvas');
  document.body.append(canvas);
  // canvas.width = (window.innerWidth * window.devicePixelRatio) | 0;
  // canvas.height = (window.innerHeight * window.devicePixelRatio) | 0;
  // canvas.style.width = window.innerWidth + 'px';
  // canvas.style.height = window.innerHeight + 'px';
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('webgl', {
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: false,
  });
  if (!ctx) throw new Error();
  return ctx;
}

const GL = createWebGL();
const textures: WebGLTexture[] = [];

function loop(ts: number) {
  const l = 0.2 * Math.random();
  GL.clearColor(l, l, l, 1);
  GL.clear(GL.COLOR_BUFFER_BIT);
  GL.viewport(0, 0, GL.canvas.width, GL.canvas.height);

  for (const texture of textures) {
    GL.bindTexture(GL.TEXTURE_2D, texture);
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const imageSources: string[] = [];
for (let a = 1; a <= 4; ++a) {
  for (let i = 0; i <= 10; ++i) {
    imageSources.push(`assets${a}/main${i}.png`);
  }
}

const imageElements: HTMLImageElement[] = [];

function loadTexture(src: string) {
  const img = document.createElement('img');
  img.onload = () => {
    console.log('loaded', img.src);
    const texture = GL.createTexture();
    if (texture) {
      GL.bindTexture(GL.TEXTURE_2D, texture);
      GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, img);
      textures.push(texture);
    }
    img.src = '';
  };
  img.src = src;
  return img;
}

function loadTextures() {
  console.log('load textures');
  for (const src of imageSources) {
    loadTexture(src);
  }
}

function loadImage(src: string): HTMLImageElement {
  const img = document.createElement('img');
  img.onload = () => {
    console.log('loaded', img.src);
  };
  img.src = src;
  return img;
}

function loadImages() {
  console.log('load images');
  for (const src of imageSources) {
    imageElements.push(loadImage(src));
  }
}

function createTextures() {
  console.log('create textures');
  for (const el of imageElements) {
    const texture = GL.createTexture();
    if (texture) {
      GL.bindTexture(GL.TEXTURE_2D, texture);
      GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, el);
      textures.push(texture);
    }
  }
}

function disposeImages() {
  console.log('dispose images');
  for (const el of imageElements) {
    el.src = '';
    //el.remove();
  }
  imageElements.length = 0;
}

// const STEPS = [loadImages, createTextures, disposeImages];
const STEPS = [loadTextures];

let currentStep = 0;
GL.canvas.addEventListener('click', (e) => {
  if (currentStep < STEPS.length) {
    STEPS[currentStep++]();
  }
});

export default {};
