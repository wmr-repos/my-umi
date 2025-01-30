import React, { useContext } from 'react'
import allLocales from '../../locale'
import { HeaderProps } from '../../types'
import LocaleContext from '../LocaleContext'
import styles from './index.less'

const Header: React.FC<HeaderProps> = (props) => {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props

  const localeContext = useContext(LocaleContext)

  const CalendarContext = allLocales[localeContext.locale]

  return (
    <div className={styles.calendar_header}>
      <div className={styles.calendar_header_left}>
        <div className={styles.calendar_header_icon} onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className={styles.calendar_header_value}>
          {curMonth.format(CalendarContext.formateMonth)}
        </div>
        <div className={styles.calendar_header_icon} onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className={styles.calendar_header_btn} onClick={todayHandler}>
          {CalendarContext.today}
        </button>
      </div>
    </div>
  )
}

export default Header
