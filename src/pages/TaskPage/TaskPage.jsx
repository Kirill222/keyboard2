import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskActions } from '../../redux/task-slice'

import Keyboard from '../../components/Keyboard/Keyboard'
import Task from '../../components/Task/Task'
import Progressbar from '../../components/Progressbar/Progressbar'
import Timer from '../../components/Timer/Timer'

const TaskPage = () => {
  const dispatch = useDispatch()
  const currentIndex = useSelector((state) => state.task.currentIndex)
  const task = useSelector((state) => state.task.task)
  const isCapital = useSelector((state) => state.task.isCapital)
  const progress = useSelector((state) => state.task.progress)
  const currentCharCode = useSelector((state) => state.task.currentCharCode)
  const isTimerStarted = useSelector((state) => state.task.isTimerStarted)

  const secretInputRef = useRef()

  useEffect(() => {
    secretInputRef.current.focus()

    dispatch(taskActions.isCapital())

    if (currentCharCode >= 65 && currentCharCode <= 90) {
      dispatch(taskActions.isCapital(true))
    } else {
      dispatch(taskActions.isCapital(false))
    }
  }, [])

  const onKeyDownHandler = (e) => {
    if (e.repeat) return

    if (e.key === 'Escape') {
      dispatch(taskActions.reset())
    } else if (e.key !== 'Shift' && currentIndex < task.length) {
      dispatch(taskActions.keyPress(e.key.charCodeAt(0)))
    }
  }

  return (
    <div>
      <Task />
      <Progressbar progress={progress} />
      <Keyboard currentCharCode={currentCharCode} isCapital={isCapital} />
      <Timer isTimerStarted={isTimerStarted} />

      <input
        className='secretinput'
        type='text'
        ref={secretInputRef}
        onKeyDown={onKeyDownHandler}
      ></input>
    </div>
  )
}

export default TaskPage
