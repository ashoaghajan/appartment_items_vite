const PXTOREM_RATIO = 16

export const pxToRem = (pxValue: number) => {
  return `${(pxValue / PXTOREM_RATIO).toFixed(5)}rem`
}
