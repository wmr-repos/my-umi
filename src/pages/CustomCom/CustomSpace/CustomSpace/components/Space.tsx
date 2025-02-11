import classNames from 'classnames'
import React, { Children, CSSProperties, useContext, useMemo } from 'react'
import { ConfigContext } from '../ConfigProvider'
import styles from './index.less'

export type sizeType = 'small' | 'middle' | 'large' | number | undefined

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}

const getNumberSize = (size: sizeType) => {
  return typeof size === 'string' ? spaceSize[size] : size
}

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
  const { space } = useContext(ConfigContext)

  const {
    className,
    style,
    children,
    size = space?.size || 'small',
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...otherProps
  } = props

  const childNodes = Children.toArray(props.children)

  const mergeAlign =
    direction === 'horizontal' && align === undefined ? 'center' : align

  const cn = classNames(
    styles.space,
    styles[`space_${direction}`],
    {
      [styles[`space_align_${mergeAlign}`]]: mergeAlign,
    },
    className,
  )

  const nodes = childNodes.map((child: any, i) => {
    const key = child?.key ?? `space-item-${i}`

    return (
      <>
        <div key={key} className={styles.spaceItem}>
          {child}
        </div>
        {i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>
            {split}
          </span>
        )}
      </>
    )
  })

  const otherStyles: CSSProperties = {}
  const [horizontalSize, verticalSize] = useMemo(
    () =>
      (Array.isArray(size) ? size : [size, size]).map((item) =>
        getNumberSize(item),
      ),
    [size],
  )

  otherStyles.columnGap = horizontalSize
  otherStyles.rowGap = verticalSize

  if (wrap) {
    otherStyles.flexWrap = 'wrap'
  }

  return (
    <div className={cn} style={{ ...otherStyles, ...style }} {...otherProps}>
      {nodes}
    </div>
  )
}

export default Space
