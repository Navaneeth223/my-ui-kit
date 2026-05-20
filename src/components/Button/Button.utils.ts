import { BUTTON_CSS } from './Button.styles';

const injectedStyles = new Set<string>();

export const injectStyle = (id: string, css: string) => {
  if (typeof document === 'undefined' || injectedStyles.has(id)) {
    return;
  }

  if (!document.getElementById(id)) {
    const styleElement = document.createElement('style');
    styleElement.id = id;
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }

  injectedStyles.add(id);
};

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
