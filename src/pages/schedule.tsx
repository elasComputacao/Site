import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { getDay, getDate, getMonth, getYear } from 'date-fns'
import { DatePickerCalendar } from 'react-nice-dates'
import {ArrowLeft, X} from 'react-feather';

import '../styles/schedule.css'
import 'react-nice-dates/build/style.css'

import events from '../enums/events'

export default function Schedule() {
  const [date, setDate] = useState<Date>()
  const [title, setTitle] = useState("Clique em uma data para saber mais sobre")
  const [description, setDescription] = useState("")

  const modifiers = {
    highlight: date => getDate(date) === 3 && getMonth(date) + 1 === 11,
  }
  
  const modifiersClassNames = {
    highlight: '-highlight',
  }
  
  function getEventInfo(date) {
    setDate(date)
    events.map((element) => {
      console.log(getDate(date) == Number(element.day))
      console.log(getDate(date))
      if (getDate(date) == Number(element.day) && getMonth(date) + 1 == Number(element.month) && getYear(date) == Number(element.year)) {
        setTitle(`${element.title} - ${element.day}/${element.month}/${element.year} (${element.time})`)
        setDescription(element.description)
      } else {
        setTitle(date ? `Nenhum evento marcado para ${getDate(date)}/${getMonth(date) + 1}/${getYear(date)}` : "")
        setDescription("")
      }
    })
  }

  return (
    <div id="schedule-page">
      <div className="schedule-header">
        <a href="/">
          <ArrowLeft size={16}/>
          Voltar para a homepage
        </a>
        <div className="event-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <main>
        <DatePickerCalendar
          date={date} 
          onDateChange={(e:Date) => getEventInfo(e)} 
          locale={enGB}
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
        />
      </main>
    </div>
  )
}