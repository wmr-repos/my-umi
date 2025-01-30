import { useControllableValue } from 'ahooks'
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react'
import styles from './index.less'

const monthNames = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
]

interface CalendarProps {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date) => void
}

export interface CalendarRef {
  getDate: () => Date
  setDate: (date: Date) => void
}

const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { value, defaultValue = new Date(), onChange } = props

  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date(),
  })

  const calendarDate = useMemo(() => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return {
      daysCount: new Date(year, month + 1, 0).getDate(),
      firstDay: new Date(year, month, 1).getDay(),
      daysPrevCount: new Date(year, month, 0).getDate(),
    }
  }, [date])

  const { daysCount, firstDay, daysPrevCount } = calendarDate

  // const [date, setDate] = useState(defaultValue)

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date
      },
      setDate(date: Date) {
        setDate(date)
      },
    }
  })

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  const renderDates = useCallback(() => {
    console.log('InternalCalendar 组件渲染了')

    const days = []

    // 上月日期
    for (let i = daysPrevCount - firstDay + 1; i <= daysPrevCount; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className={`${styles.empty} ${styles.dateCellGray}`}
        >
          {i}
        </div>,
      )
    }

    // 本月日期
    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const curDate = new Date(date.getFullYear(), date.getMonth(), i)
        setDate(curDate)
        // onChange?.(curDate)
      }

      if (i === date.getDate()) {
        days.push(
          <div
            key={`${i}`}
            className={`${styles.day} ${styles.selected}`}
            onClick={() => clickHandler()}
          >
            {i}
          </div>,
        )
      } else {
        days.push(
          <div
            key={`${i}`}
            className={styles.day}
            onClick={() => clickHandler()}
          >
            {i}
          </div>,
        )
      }
    }

    // 下月日期
    const remainingDays = 42 - daysCount - firstDay

    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className={`${styles.empty} ${styles.dateCellGray}`}
        >
          {i}
        </div>,
      )
    }

    return days
  }, [date, calendarDate])

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.days}>
        <div className={styles.day}>日</div>
        <div className={styles.day}>一</div>
        <div className={styles.day}>二</div>
        <div className={styles.day}>三</div>
        <div className={styles.day}>四</div>
        <div className={styles.day}>五</div>
        <div className={styles.day}>六</div>
        {renderDates()}
      </div>
    </div>
  )
}

export const Calendar = memo(forwardRef(InternalCalendar))
