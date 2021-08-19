# установка атрибутов динамически

устаналиваем через useState:

`const [imageUrl, setImageUrl]=useState("https://picsum.photos/200")`

и в теге img формируем через выражение адрес картинки:
` <img src = {imageUrl}`

# добавление классов

классы добавляются через ключевое слово **className**
`className='badge bg-primary' `

# добавление стилей в тэг

1.  в тэг добавляем: ` style={}`
2.  определяем объект в котором будут храниться стили:  
     `const styles={ fontSize: "16px", fontWeight: "bold" } `
3.  добавляем этот объект в `style = {styles} `

или можно прописать в тэге в **style={{ тут пишем стили }}**
`<button style={{ fontSize: 14, fontWeight: "bold" }}`

[Документация Bootstrap v5.1:](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

# рендеринг списков

**каждый элемент списков** должен иметь **уникальный ключ**

при изменении массива элементов его нужно обновить в VirtualDOM и затем синхронизировать в dom

**ключ** должен быть уникальным только для этого _конкретного массива_

# Условный рендеринг

когда есть выражение результат которого есть true && 'другое выражение' то результат будет результат второго выражения

`true && "tag"` на выходе будет ` "tag"`

` false && "tag"` на выходе будет `false`

у JS движка есть свой метод который конвертирует в правдивый или ложный:

- truesy - если строчная переменная `true && "t"`имеет хотя бы один символ то выдает **truesy** и движок выдает последный элемент выражения т.е. `"t" `
- falsy - если строчная переменная выражения `true && ""` пуста - то выдает **falsy**

выражение `true&&'tag'&&1` выдает **_последнее_** выражение: **1**

`{tags.length === 0 && 'Тэги не найдены'}` если длина массива будет равна 0 то выражение даст `'Тэги не найдены'`

или условие можно записать через `if - else` или тернарный оператор: `условие ? res (если истина) : res1 ( если false)`

```const renderTags =() => {
  if (tags.length === 0 ) return 'Тэгов не найдено'
  return tags.map((tag) => {
    <li key={tag} >{tag}</li>
  })
    }
}
```

# обработка событий

в Реакте все события основаны на стандртных событиях DOM

в элемент где надо поймать событие ставиться тип события и его функция обработчик

`<button onClick={hanldeIncrement} className="btn btn-secondary btn-sm"> Increment </button>`

и выше вызова прописывается ф-я обработчик:` const hanldeIncrement = () => { setCount(count + 1) }`

> !!! в события ф-я **_не вызывается_**
> `onClick={hanldeIncrement}`

# Что происходит при обновлении состояния ?

реакт получает изменение события, сравнивает состояние с текущим  положенимем и значение  в DOM и в случае необходимости перерисовывает измененное

#  Передача аргументов событий
