import cs from 'classnames'
import { Dayjs } from 'dayjs'
import React, { useContext } from 'react'
import allLocales from '../../locale'
import { MonthCalendarProps } from '../../types'
import LocaleContext from '../LocaleContext'
import styles from './index.less'

function getAllDays(date: Dayjs) {
  const startDate = date.startOf('month')
  const day = startDate.day()

  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7,
  )

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'),
      currentMonth: false,
    }
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, 'day')
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    }
  }

  return daysInfo
}

export const MonthCalendar: React.FC<MonthCalendarProps> = (props) => {
  const { value, dateRender, dateInnerContent, selectHandler, curMonth } = props

  const weekList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]

  const allDays = getAllDays(curMonth)

  const localeContext = useContext(LocaleContext)

  const CalendarLocale = allLocales[localeContext.locale]

  function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
    const rows = []

    for (let i = 0; i < 6; i++) {
      const row = []
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j]
        row[j] = (
          <div
            className={`${styles.calendar_month_body_cell} ${
              item.currentMonth ? styles.calendar_month_body_cell_current : ''
            }`}
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={styles.calendar_month_body_cell_date}>
                <div
                  className={cs(
                    `${styles.calendar_month_body_cell_date_value}`,
                    value?.format('YYYY-MM-DD') ===
                      item.date.format('YYYY-MM-DD')
                      ? `${styles.calendar_month_body_cell_date_selected}`
                      : '',
                  )}
                >
                  {item.date.date()}
                </div>
                <div className={styles.calendar_month_cell_body_date_content}>
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        )
      }
      rows.push(row)
    }

    return rows.map((row) => (
      <div className={styles.calendar_month_body_row}>{row}</div>
    ))
  }

  return (
    <div className={styles.calendar_month}>
      <div className={styles.calendar_month_week_list}>
        {weekList.map((week) => (
          <div className={styles.calendar_month_week_list_item} key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className={styles.calendar_month_body}>{renderDays(allDays)}</div>
    </div>
  )
}
