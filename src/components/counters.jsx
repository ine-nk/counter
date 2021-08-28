import React, { useState } from 'react'
import Counter from './counter'

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 4, id: 2, name: 'Вилка' },
    { value: 0, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ]
  const [counters, setCounters] = useState(initialState)


  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId)
    setCounters(newCounters)
  }


  const hanldeIncrement = (counterId) => {
    const newCounters = [...counters]

    const indxCount = newCounters.findIndex(
      (counter) => (counter.id === counterId))
    newCounters[indxCount].value++

    setCounters(newCounters)
  }

  const hanldeDecrement = (counterId) => {
    const newCounters = [...counters]

    const indxCount = newCounters.findIndex(
      counter => counter.id === counterId)
    newCounters[indxCount].value--

    setCounters(newCounters)
  }

  
  const handleReset = () => setCounters(initialState)

  return (
    <div>
      <button onClick={handleReset} className="btn btn-sm btn-primary m-2">Сброс</button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          {...counter}
          onIncrement={() => hanldeIncrement(counter.id)}
          onDecrement={() => hanldeDecrement(counter.id)}
        />
      ))}
    </div>
  )
}

export default Counters
