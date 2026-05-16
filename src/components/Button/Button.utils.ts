import { BUTTON_STYLE_ID, buttonStyles } from './Button.styles';
import type { ButtonEffect } from './Button.types';

let stylesInjected = false;

export const injectButtonStyles = () => {
  if (typeof document === 'undefined' || stylesInjected) {
    return;
  }

  if (!document.getElementById(BUTTON_STYLE_ID)) {
    const style = document.createElement('style');
    style.id = BUTTON_STYLE_ID;
    style.textContent = buttonStyles;
    document.head.appendChild(style);
  }

  stylesInjected = true;
};

export const hasEffect = (effects: ButtonEffect[] | undefined, effect: ButtonEffect) =>
  Boolean(effects?.includes(effect));

export const playButtonSound = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(520, context.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(720, context.currentTime + 0.045);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.028, context.currentTime + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.08);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.09);
  oscillator.addEventListener('ended', () => {
    void context.close();
  });
};

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
