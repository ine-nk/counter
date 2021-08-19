import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  // const [imageUrl, setImageUrl] = useState('https://picsum.photos/200')
  const formCount = () => {
    return count === 0 ? 'Ноль' : count
  }

  // const tags = ['tag1', 'tag2', 'tag3']
  // const renderTags = () => {
  //   if (tags.length === 0) return 'Тэгов не найдено'
  //   return tags.map((tag) => <li key={tag}>{tag}</li>)
  // }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-'
    classes += count === 0 ? 'danger' : 'primary'
    return classes
  }
  const hanldeIncrement = (productId) => {
    console.log('productId', productId)
    setCount(count + 1)
  }

  const hanldeDecrement = (productId) => {
    console.log('productId', productId)
    setCount(count <= 0 ? 0 : count - 1)
  }

  return (
    <>
      {/* {tags.length === 0 && 'Тэги не найдены'}
      {renderTags()} */}
      {/* {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))} */}
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => hanldeIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2 "
      >
        Increment
      </button>
      <button
        onClick={() => hanldeDecrement({ id: 1 })}
        className="btn btn-secondary btn-sm m-2 "
      >
        Decrement
      </button>
    </>
  )
}
export default Counter
