// UI sounds synthesized with Web Audio, so there are no audio files to load.
let ctx: AudioContext | undefined;

export function play(kind: "click" | "glitch") {
  try {
    ctx ??= new AudioContext();
    const t = ctx.currentTime;
    const gain = ctx.createGain();
    gain.connect(ctx.destination);

    if (kind === "click") {
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1600, t);
      osc.frequency.exponentialRampToValueAtTime(500, t + 0.03);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      osc.connect(gain);
      osc.start(t);
      osc.stop(t + 0.06);
      return;
    }

    // Glitch: sample-and-hold noise stuttering in 8 steps, matching the CSS steps(8).
    const seconds = 0.52;
    const buffer = ctx.createBuffer(1, seconds * ctx.sampleRate, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let value = 0;
    let hold = 0;
    for (let i = 0; i < data.length; i++) {
      if (hold-- <= 0) {
        value = Math.random() * 2 - 1;
        hold = 20 + Math.random() * 300;
      }
      data[i] = value;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 1400;
    band.Q.value = 0.6;
    for (let step = 0; step < 8; step++) {
      gain.gain.setValueAtTime(step % 2 ? 0.06 : 0.25, t + (step * seconds) / 8);
    }
    gain.gain.setValueAtTime(0, t + seconds);
    src.connect(band).connect(gain);
    src.start(t);
  } catch {
    // No audio support: stay silent.
  }
}
