import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function WordsCounter() {
  const [words, setWords] = useState('');
  const [wordsInfo, setWordsInfo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let wordLength = words.trim().split(' ').length
    // console.log('word', words.trim().split(' '))
    if (!words) {
      return alert("Type something")
    }

    if (wordLength > 150) {
      return alert("Maximum Words 150 Exceeded")
    }

    else {
setWordsInfo([...wordsInfo, WordCount(words)])
    }
    setWords("")
    // console.log('counter',WordCount(words))
  }

  function WordCount(str) {
    return {
      word: str, wordCount: str.split(' ')
        .filter(function (n) { return n != '' })
        .length
    };
  }
  return (
    <div className="App">
      <h1>WORDS COUNTER</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={words}
            placeholder='Discribe yourself here.....'
            onChange={(e) => setWords(e.target.value)}
            disabled={words.split(' ').length > 150}
          ></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>


      </form>

      {wordsInfo.map((item, index) => {
        return (
          <ul>
            <li key={index}>BLOG: {item.word}</li>
            <li>WORDS COUNT: {item.wordCount}</li>
          </ul>
        )

      })}
    </div>
  );
}

export default WordsCounter;
