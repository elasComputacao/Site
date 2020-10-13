import React, { useEffect, useState } from 'react'
import { enGB } from 'date-fns/locale'
import { getDay, getDate, getMonth, getYear, isSameDay } from 'date-fns'
import { DatePickerCalendar,Calendar } from 'react-nice-dates'
import {ArrowLeft, X} from 'react-feather';

import '../styles/schedule.css'
import 'react-nice-dates/build/style.css'

import events from '../enums/events'

export default function Schedule() {
  const [date, setDate] = useState<Date>()
  const [title, setTitle] = useState("Clique em uma data para saber mais sobre")
  const [description, setDescription] = useState("")

  useEffect(() => {
    getEventInfo(date);
  },[date])

  function checkDate(date) {
    
    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      const newDate = new Date(Number(element.year), Number(element.month) - 1, Number(element.day))
      console.log(getDate(date) == getDate(newDate))
      console.log(getDate(date))
      console.log(getDate(newDate))
      if (getDate(newDate) == getDate(date) && getMonth(newDate) == getMonth(date) && getYear(newDate) == getYear(date)) {
        return true
      }
    }
    return false
  }

  const modifiers = {
    highlight: date => checkDate(date),
  }
  
  const modifiersClassNames = {
    highlight: '-highlight',
  }
  
  function getEventInfo(date) {

    for (let index = 0; index < events.length; index++) {
      const element = events[index];
      if (getDate(date) == Number(element.day) && getMonth(date) + 1 == Number(element.month) && getYear(date) == Number(element.year)) {
        setTitle(`${element.title} - ${element.day}/${element.month}/${element.year} (${element.time})`)
        setDescription(element.description)
        return
      } else {
        setTitle(date ? `Nenhum evento marcado para ${getDate(date)}/${getMonth(date) + 1}/${getYear(date)}` : "")
        setDescription("")
      }
      setDate(date)
    }
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
          onDateChange={(e:Date) => setDate(e)} 
          locale={enGB}
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
        />
      </main>
    </div>
  )
}