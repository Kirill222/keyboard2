import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { taskActions } from '../../redux/task-slice'

import Keyboard from '../../components/Keyboard/Keyboard'
import Task from '../../components/Task/Task'

const TaskPage = () => {
  const dispatch = useDispatch()
  const currentIndex = useSelector((state) => state.task.currentIndex)
  const task = useSelector((state) => state.task.task)
  const isCapital = useSelector((state) => state.task.isCapital)
  const currentCharCode = useSelector((state) => state.task.currentCharCode)

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
      <Keyboard currentCharCode={currentCharCode} isCapital={isCapital} />

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
