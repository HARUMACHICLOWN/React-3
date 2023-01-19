import logo from './logo.svg';
import './App.css';
import { getByText, render } from '@testing-library/react';
import React, { useState } from 'react';

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState('');

  const result = arr.map((arr, index) => {
    return <p key={index}>{arr}</p>;
  });




  const [arr2, setArr2] = useState([1, 2, 3, 4, 5]);
  const result2 = arr.map((arr, index) => {
    return <p key={index}>{arr2}</p>;
  });
  let del = (arr2[1]);
  function remItem(index) {
    setArr2([...arr2.splice(0, index), ...arr2.splice(index, del)])
  }



  const [arr3, setArr3] = useState([1, 2, 3, 4, 5]);
  const result3 = arr.map((arr, index) => {
    return <p key={index}>{arr3}</p>;
  });
  let edit = arr3[4]
  function editItem(index) {
    setArr3([...arr3.splice(0, index), '*', ...arr3.splice(index, edit)])
  }



  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
  const [val, setVal] = useState('')
  const res = notes.map((note, index) => {
    return <ul><li key={index}>{note}</li></ul>
  })


  function deleteItem(index) {
    setNotes1([...notes1.slice(0, index), ...notes1.slice(index + 1)]);
  }
  const [notes1, setNotes1] = useState(['a', 'b', 'c', 'd', 'e'])
  const res1 = notes1.map((note, index) => {
    return <ul><li key={index}>{note}</li><button onClick={() => deleteItem(index)}>Удалить</button></ul>
  })






  const [notes2, setNotes2] = useState(['a', 'b', 'c', 'd', 'e'])
  const [editNum, setEditNum] = useState(null);
  const [val2, setVal2] = useState('');

  const res2 = notes2.map((note, index) => {
    return <ul><li key={index} onClick={() => setEditNum(index)}>{note}</li></ul>
  })
  function changeItem(event) {
    setNotes2([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
  }
  function stopEdit(event) {
    setEditNum(null);
  }
  function changeValue(event) {
    setVal2(event.target.value)
  }
  function addItem() {
    setNotes2([...notes2, value])
  }
  let input;
  if (editNum) {
    input = <input value={notes2[editNum]} onChange={changeItem} onBlur={stopEdit}></input>
  } else {
    input = <input value={val2} onChange={changeValue} onBlur={addItem}></input>
  }







  const [notes3, setNotes3] = useState(['a', 'b', 'c', 'd', 'e'])
  const [val3, setVal3] = useState(null)
  const [editNum1, setEditNum1] = useState('')

  const res3 = notes3.map((note, index) => {
    return <ul><li key={index} onClick={() => startEdit(index)}>{note}</li></ul>
  })
  function startEdit(index) {
    setEditNum1(index);
    setVal3(notes3[index]);
  }
  function changeHandler(event) {
    setVal3(event.target.value)
    if (editNum1) {
      setNotes3([...notes3.slice(0, editNum1), event.target.value, ...notes3.slice(editNum1 + 1)]);
    }
  }
  function blurHandler(event) {
    if (!editNum1) {
      setNotes3([...notes3, value])
    } else {
      setEditNum1(null)
    }
    setVal3('')
  }




  const [notes4, setNotes4] = useState(['a', 'b', 'c', 'd', 'e'])
  const [editNum2, setEditNum2] = useState(null)

  const res4 = notes4.map((note, index) => {
    return <ul><li key={index} onClick={() => startEdit1(index)}>{note}</li></ul>
  })
  function startEdit1(index) {
    setEditNum2(index);
  }
  function editItem1(event) {
    setNotes4([...notes4.slice(0, editNum2), event.target.value, ...notes4.slice(editNum2 + 1)]);
  }
  function createItem() {
    if (!editNum2) {
      const res4 = [...notes4, '']
      setNotes4(res4)
      setEditNum2(res4.length - 1)
    }
  }
  function stopEdit1() {
    setEditNum2(null)
  }
  return (
    <div>
      {result}

      <input value={value} onChange={event => setValue(event.target.value)}></input>
      <button onClick={() => setArr([...arr, value])}>Добавить</button>



      {result2}
      <button onClick={remItem}>Удалить</button>




      {result3}
      <button onClick={editItem}>Изменить</button>

      {res}
      <input value={val} onChange={event => setVal(event.target.value)}></input>
      <button onClick={() => setNotes([...notes, val])}>Добавить</button>

      <br></br>
      {res1}



      {res2}
      {input}



      {res3}
      <input value={val3} onChange={changeHandler} onBlur={blurHandler} />


      {res4}
      <input value={editNum2 ? notes4[editNum2] : ''} onChange={editItem1} onFocus={createItem} onBlur={stopEdit1}></input>
    </div>
  );
}







export default App;
