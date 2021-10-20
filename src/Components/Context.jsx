import React, { useReducer } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 8rem;
`;

const QuestionCard = styled.div`
  background-color: #ddffe7;
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
export default function MyProviderContext({ children }) {
  const [state, dispatch] = useReducer(reducer, { showAnswer: false });

  return (
    <>
      <myContext.Provider>
        <Container>
          <QuestionCard>
            <h2>What is a Component?</h2>
            {state.showAnswer && (
              <p>
                Its basically pieces of code. Components in React return a piece
                of JSX code that tells what should be rendered on the screen.
              </p>
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
