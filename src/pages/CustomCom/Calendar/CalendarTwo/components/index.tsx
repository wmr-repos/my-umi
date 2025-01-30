import { useControllableValue } from 'ahooks'
import cs from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React, { useState } from 'react'
import { CalendarProps } from '../types'
import Header from './Header'
import LocalContext from './LocaleContext'
import { MonthCalendar } from './MonthCalendar'

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { value, style, className, locale, onChange } = props

  const classNames = cs('calendar', className)

  const [curValue, setCurValue] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs(),
  })

  const [curMonth, setCurMonth] = useState<Dayjs>(curValue)

  function changeDate(date: Dayjs) {
    setCurValue(date)
    setCurMonth(date)
    onChange?.(date)
  }

  function selectHandler(date: Dayjs) {
    changeDate(date)
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, 'month'))
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, 'month'))
  }

  function todayHandler() {
    const date = dayjs(Date.now())

    changeDate(date)
  }

  return (
    <LocalContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocalContext.Provider>
  )
}
