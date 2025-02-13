// 绘制水印的hook

import { merge } from 'lodash-es'
import { useEffect, useRef, useState } from 'react'
import { WatermarkProps } from '../components/Watermark'

export type WatermarkOptions = Omit<
  WatermarkProps,
  'children' | 'className' | 'style'
>

// 判断是否是数字，排除NaN（obj === obj）
export function isNumber(obj: any): obj is number {
  return (
    Object.prototype.toString.call(obj) === '[object Number]' && obj === obj
  )
}

const toNumber = (value?: string | number, defaultValue?: number) => {
  if (value === undefined) {
    return defaultValue
  }
  if (isNumber(value)) {
    return value
  }
  const numberVal = parseFloat(value)
  return isNumber(numberVal) ? numberVal : defaultValue
}

const defaultOptions = {
  rotate: -20,
  zIndex: 1,
  width: 100,
  gap: [100, 100],
  fontStyle: {
    fontFamily: 'sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.15)',
  },
  getContainer: () => document.body,
}

const getMergedOptions = (o: Partial<WatermarkOptions>) => {
  const options = o || {}

  const mergedOptions = {
    ...options,
    rotate: options.rotate || defaultOptions.rotate,
    zIndex: options.zIndex || defaultOptions.zIndex,
    fontStyle: {
      ...options.fontStyle,
      ...defaultOptions.fontStyle,
    },
    width: toNumber(
      options.width,
      options.image ? defaultOptions.width : undefined,
    ),
    height: toNumber(options.height, undefined),
    getContainer: options.getContainer!,
    gap: [
      toNumber(options.gap?.[0], defaultOptions.gap[0]),
      toNumber(options.gap?.[1], defaultOptions.gap[1]),
    ],
  } as Required<WatermarkOptions>

  const mergedOffsetX = toNumber(mergedOptions.offset?.[0], 0)!
  const mergedOffsetY = toNumber(
    mergedOptions.offset?.[1] || mergedOptions.offset?.[0],
  )!
  mergedOptions.offset = [mergedOffsetX, mergedOffsetY]

  return mergedOptions
}

const getCanvasData = (
  options: Required<WatermarkOptions>,
): Promise<{ width: number; height: number; base64Url: string }> => {}

export default function useWatermark(params: WatermarkOptions) {
  const [options, setOptions] = useState(params || {})


  const watermarkDivRef = useRef<HTMLDivElement>(null)

  function drawWatermark() {}

  useEffect(() => {
    drawWatermark()
  }, [options])
  
  return {
    generateWatermark: (newOptions: WatermarkOptions) => {
      setOptions(merge({}, options, newOptions))
    },
    destrory: () => {},
  }
}
