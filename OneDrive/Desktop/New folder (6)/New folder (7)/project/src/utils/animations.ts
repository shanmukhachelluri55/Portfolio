// Animation utility functions
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const parallaxEffect = (event: MouseEvent, element: HTMLElement, strength = 20) => {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;
  
  const xPos = (clientX / innerWidth - 0.5) * strength;
  const yPos = (clientY / innerHeight - 0.5) * strength;
  
  element.style.transform = `translate(${xPos}px, ${yPos}px)`;
};

export const magneticEffect = (event: MouseEvent, element: HTMLElement, strength = 0.5) => {
  const { left, top, width, height } = element.getBoundingClientRect();
  const x = event.clientX - left;
  const y = event.clientY - top;
  
  const xc = width / 2;
  const yc = height / 2;
  
  const dx = x - xc;
  const dy = y - yc;
  
  element.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
};