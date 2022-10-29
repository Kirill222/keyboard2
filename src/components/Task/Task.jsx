import Symbol from './Symbol'

import s from './task.module.css'

import { useSelector } from 'react-redux'

function Task() {
  let task = useSelector((state) => state.task.task)

  // const dividedByLetters = task.split('').map((letter) => {
  //   return { status: '', symbol: letter }
  // })

  console.log(task)

  return (
    <div className={s.task}>
      {task.length &&
        task.map((symbol) => {
          return <Symbol symbol={symbol} key={Math.random()} />
        })}
    </div>
  )
}

export default Task
