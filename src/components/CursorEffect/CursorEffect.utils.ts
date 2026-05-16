import { CURSOR_EFFECT_STYLE_ID, cursorEffectStyles } from './CursorEffect.styles';

let cursorStylesInjected = false;

export const injectCursorEffectStyles = () => {
  if (typeof document === 'undefined' || cursorStylesInjected) {
    return;
  }

  if (!document.getElementById(CURSOR_EFFECT_STYLE_ID)) {
    const style = document.createElement('style');
    style.id = CURSOR_EFFECT_STYLE_ID;
    style.textContent = cursorEffectStyles;
    document.head.appendChild(style);
  }

  cursorStylesInjected = true;
};

export const getMagneticPoint = (target: Element | null, selector: string) => {
  const magneticTarget = target?.closest(selector);
  if (!magneticTarget) {
    return null;
  }

  const rect = magneticTarget.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
};
