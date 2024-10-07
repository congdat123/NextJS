'use client'

import React, { useEffect, useState } from 'react'
import EasySpeech from 'easy-speech'
import Button from '@mui/material/Button';

import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import StopIcon from '@mui/icons-material/Stop';
import { Alert, ButtonGroup } from '@mui/material';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { examples, IExample } from './example';

import style from './Exercise.module.scss'

function ExerCise() {
  const [answers, setAnswers] = useState<{ answerNum: number, input: { index: number, word: string }[] }[]>(
    examples.map((v, idx) => ({
      answerNum: idx,
      input: []
    })))
  const [check, setCheck] = useState<boolean[]>(Array(examples.length).fill(undefined))
  const [speaking, setSpeaking] = useState<boolean>(false)
  const [pageNum, setPage] = useState<number>(0)
  const [result, setResult] = useState<number>()

  const onChange = (value: string, idx: number): void => {
    const answer = answers[pageNum]
    if (answer.input.some(v => v.index === idx)) {
      const values = answer.input.map(v => {
        if (v.index === idx) {
          v.word = value
        }
        return v
      });
      setAnswers(answers.map(v => {
        if (v.answerNum === pageNum) {
          v.input = values
        }
        return v;
      }))
    } else {
      answer.input.push({ word: value, index: idx })
      setAnswers(answers.map(v => {
        if (v.answerNum === pageNum) {
          v = answer
        }
        return v;
      }))
    }
  }

  const onClick = async (): Promise<void> => {
    setSpeaking(true)
    await EasySpeech.speak({
      text: examples[pageNum].words,
      voice: EasySpeech.voices()[2], // optional, will use a default or fallback
      pitch: 1,
      rate: 1,
      volume: 1,
      boundary: e => console.debug('boundary reached')
    })
    setSpeaking(false)
  }

  const onCheck = (): void => {
    const checkValue = answers.map(v => {
      return v.input.sort((a, b) => a.index - b.index).map(v => v.word)
    })

    setCheck(check.map((v, idx) => {
      if (idx === pageNum) {
        v = examples[pageNum].hide.every((v, idx) => checkValue[pageNum][idx] === v)
      }
      return v;
    }))
  }

  const onSubmit = (): void => {
    const checkValue = answers.map(v => {
      return v.input.sort((a, b) => a.index - b.index).map(v => v.word)
    })
    const checkRes = check.map((v, idx) => {
      return v = examples[idx].hide.every((v, i) => checkValue[idx][i] === v)
    })
    setCheck(checkRes)
    setResult(checkRes.filter(v => v).length)
  }

  useEffect(() => {
    EasySpeech.detect()

    EasySpeech.init({ maxTimeout: 5000, interval: 250 })
      .then(() => console.debug('load complete'))
      .catch(e => console.error(e))
  }, [])

  return (
    <div className={style.container}>
      <div className={style.firstElm}>
        <div className={style.sentence} >
          <div style={{ display: 'flex', gap: 5 }}>
            {examples[pageNum].words.split(' ').map((v, idx) => {
              if (examples[pageNum].hide.includes(v)) {
                const value = answers[pageNum].input.filter((v) => v.index === idx)[0]?.word || ''
                return <input
                  key={idx}
                  className={style.blankInput}
                  style={{ width: v.length * 10 }}
                  type='text'
                  value={value}
                  maxLength={v.length}
                  onChange={(e) => onChange(e.target.value, idx)}
                />
              }
              return <span key={idx} className={style.word}>{v}</span>
            })}
          </div>
          <Button variant="outlined" onClick={onCheck}>Check</Button>
        </div>
        {check[pageNum] !== undefined ?
          <Alert variant='outlined' severity={check[pageNum] ? 'success' : 'error'}>{check[pageNum] ? 'This is a correct answer.' : 'This is a wrong answer.'}</Alert>
          : <div style={{ height: 48 }} />
        }
        <div>{examples[pageNum].vietnamese}</div>
        <div>{examples[pageNum].phonetics.split(' ').map((v, idx) => <span key={idx}>{v}{idx !== examples[pageNum].phonetics.split(' ').length - 1 ? ' // ' : ''}</span>)}</div>
        {!speaking ?
          <VolumeUpOutlinedIcon onClick={onClick} fontSize={'large'} />
          :
          <StopIcon />
        }
      </div>
      <div className={style.secondElm}>
        <span>Exercise</span>
        <div className={style.exerciseNum}>
          {examples.map((_, idx) => (
            <Button
              variant={pageNum === idx ? 'contained' : 'outlined'}
              key={idx}
              className={style.button}
              size='small'
              onClick={() => setPage(idx)}
              sx={{
                minWidth: 0,
                width: 35,
                height: 35
              }}
              color={check[idx] !== undefined ? check[idx] ? 'success' : 'error' : 'primary'}
            >
              {idx + 1}
            </Button>
          ))}
        </div>
        <Button
          variant='contained'
          endIcon={<PublishOutlinedIcon />}
          onClick={onSubmit}
        >
          Submit
        </Button>
        {result !== undefined && <div style={{ marginTop: 10 }}>Result: {result}/ {examples.length}</div>}
      </div>
    </div>
  )
}
export default ExerCise
