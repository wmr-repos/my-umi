import {
  CSSProperties,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import useWatermark from '../hooks/useWatermark'

export interface WatermarkProps extends PropsWithChildren {
  style?: CSSProperties
  className?: string
  zIndex?: number | string
  width?: number
  height?: number
  rotate?: number
  image?: string
  content?: string | string[]
  gap?: [number, number]
  offset?: [number, number]
  fontStyle?: {
    color?: string
    fontSize?: number | string
    fontWeight?: number | string
    fontFamily?: string
  }
  getContainer?: () => HTMLElement
}

const Watermark: React.FC<WatermarkProps> = (props) => {
  const {
    style,
    className,
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    gap,
    offset,
    fontStyle,
  } = props

  const containerRef = useRef<HTMLDivElement>(null)

  const getContainer = useCallback(() => {
    return props.getContainer ? props.getContainer() : containerRef.current!
  }, [containerRef.current, props.getContainer])

  const { generateWatermark } = useWatermark({
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    gap,
    offset,
    fontStyle,
    getContainer,
  })

  useEffect(() => {
    generateWatermark({
      zIndex,
      width,
      height,
      rotate,
      image,
      content,
      gap,
      offset,
      fontStyle,
      getContainer,
    })
  }, [
    zIndex,
    width,
    height,
    rotate,
    image,
    content,
    JSON.stringify(gap),
    JSON.stringify(offset),
    JSON.stringify(fontStyle),
    getContainer,
  ])

  return props.children ? (
    <div className={className} style={style} ref={containerRef}>
      {props.children}
    </div>
  ) : null
}

export default Watermark
