import React, { useReducer } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem 8rem;
`;

const QuestionCard = styled.div`
  //background-color: #ddffe7;
`;

// -----=^.^-=----- 1 - Step creat the Context and store it in a const;
export const myContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleShowAnswer":
      return { showAnswer: !state.showAnswer };

    default:
      return state;
  }
};

// -----=^.^-=----- 2 - Step create the providers
export default function Question({ question, answer }) {
  const [state, dispatch] = useReducer(reducer, { showAnswer: false });

  return (
    <>
      <myContext.Provider>
        <Container>
          <QuestionCard>
            <h4>{question}</h4>
            {state.showAnswer && (
              <p dangerouslySetInnerHTML={{__html: answer}}/>
            )}

            <button onClick={() => dispatch({ type: "toggleShowAnswer" })}>
              {state.showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
          </QuestionCard>
        </Container>
      </myContext.Provider>
    </>
  );
}
