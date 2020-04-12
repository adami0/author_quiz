import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = React.createElement("div");
    ReactDOM.render(<AuthorQuiz></AuthorQuiz>, div);
  })
})