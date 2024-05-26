/* eslint-disable @typescript-eslint/ban-ts-comment */
export const backgroundColorClasses = {
  blueDark: 'bg-blueDark',
  white: 'bg-white',
  background1: 'bg-background1',
  background2: 'bg-background2',
  background3: 'bg-background3',
  background4: 'bg-background4',
  background5: 'bg-background5',
  transparent: 'bg-transparent'
};

export const getBackgroundColorClass = (colorKey: string) => {
  //@ts-ignore
  return backgroundColorClasses[colorKey] || 'bg-defaultColor';
};
