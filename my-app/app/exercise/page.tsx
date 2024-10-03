'use client'

import React, { useEffect, useState } from 'react'
import EasySpeech from 'easy-speech'
import Button from '@mui/material/Button';

import style from './Exercise.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function ExerCise() {

  const example = {
    words: "I am a software engineer",
    hide: ['a', 'software', 'engineer'],
    vietnamese: "Tôi là một kỹ sư phần mềm",
    phonetics: "aɪ æm ə ˈsɔfˌtwɛr ˈɛnʤəˈnɪr",
  }

  const [input, setInput] = useState<{ index: number, word: string }[]>([])

  const onChange = (value: string, idx: number): void => {
    if (input.some(v => v.index === idx)) {
      const values = input.map(v => {
        if (v.index === idx) {
          v.word = value
        }
        return v
      });
      setInput(values)
    } else {
      setInput((prev) => [
        ...prev,
        { word: value, index: idx }
      ])
    }
  }

  const onClick = (): void => {
    EasySpeech.speak({
      text: 'I am a software engineer',
      voice: EasySpeech.voices()[2], // optional, will use a default or fallback
      pitch: 1,
      rate: 1,
      volume: 1,
      // there are more events, see the API for supported events
      boundary: e => console.debug('boundary reached')
    })
  }

  const onCheck = (): void => {
    const inputValue = input.sort((a, b) => a.index - b.index).map(v => v.word)
    alert(example.hide.every((v, idx) => inputValue[idx] === v))
  }

  useEffect(() => {
    EasySpeech.detect()

    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
      .then(() => console.debug('load complete'))
      .catch(e => console.error(e))
  }, [])
  console.log(input)

  return (
    <section className={style.container}>
      <div className={style.sentence} >
        <div style={{ display: 'flex', gap: 5 }}>
          {example.words.split(' ').map((v, idx) => {
            if (example.hide.includes(v)) {
              return <input
                key={idx}
                className={style.blankInput}
                style={{ width: v.length * 10 }}
                type='text'
                maxLength={v.length}
                onChange={(e) => onChange(e.target.value, idx)}
              />
            }
            return <span key={idx} className={style.word}>{v}</span>
          })}
        </div>
        <Button variant="contained" onClick={onCheck}>Check</Button>
      </div>
      <div>{example.vietnamese}</div>
      <div>{example.phonetics.split(' ').map((v, idx) => <span key={idx}>{v}{idx !== example.phonetics.split(' ').length - 1 ? '//' : ''}</span>)}</div>

      <PlayCircleOutlineIcon onClick={onClick} fontSize={'large'} />
    </section>
  )
}

export default ExerCise
