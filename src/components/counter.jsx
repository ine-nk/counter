import React from 'react'

const Counter = (props) => {
  console.log('props: ', props)


  // const [imageUrl, setImageUrl] = useState('https://picsum.photos/200')
  const formValue = () => {
    return props.value === 0 ? 'Ноль' : props.value
  }

  // const tags = ['tag1', 'tag2', 'tag3']
  // const renderTags = () => {
  //   if (tags.length === 0) return 'Тэгов не найдено'
  //   return tags.map((tag) => <li key={tag}>{tag}</li>)
  // }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-'
    classes += props.value === 0 ? 'danger' : 'primary'
    return classes
  }



  return (
    <>
      <h4>{props.name}</h4>
      {props.children}
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncrement( props.id )}
        className="btn btn-secondary btn-sm m-2 "
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement( props.id )}
        className="btn btn-secondary btn-sm m-2 "
        disabled={!props.value}
      >
        Decrement
      </button>
      <button className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >Delete</button>
      <hr />
    </>
  )
}

export default Counter
