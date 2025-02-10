import React from 'react'

export type sizeType = 'small' | 'middle' | 'large' | number | undefined

interface SpaceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
  style?: React.CSSProperties
  size?: sizeType | [sizeType, sizeType]
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  split?: React.ReactNode
  wrap?: boolean
}

const Space: React.FC<SpaceProps> = (props) => {
  const { className, style, ...otherProps } = props

  return <div className={className} style={style} {...otherProps}></div>
}

export default Space
