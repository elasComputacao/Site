import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { getDay, getDate } from 'date-fns'
import { DatePickerCalendar } from 'react-nice-dates'
import {ArrowLeft} from 'react-feather';

import '../styles/schedule.css'
import 'react-nice-dates/build/style.css'

export default function Schedule() {
  const [date, setDate] = useState<Date>()
  
  const modifiers = {
    highlight: date => getDate(date) === 10 // Highlights Tuesdays
  }
  
  const modifiersClassNames = {
    highlight: '-highlight'
  }
  
  return (
    <div id="schedule-page">
        <a href="/">
        <ArrowLeft size={16}/>
        Voltar para a homepage
        </a>
      <DatePickerCalendar 
        date={date} 
        onDateChange={(e:Date) => setDate(e)} 
        locale={enGB}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />
    </div>
  )
}