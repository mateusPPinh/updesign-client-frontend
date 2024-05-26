/* eslint-disable @typescript-eslint/ban-ts-comment */
export const alignItemsClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center'
};

export const getAlignItemsClass = (alignKey: string) => {
  // @ts-ignore
  return alignItemsClasses[alignKey] || 'items-center';
};
