import React, { useState } from "react";
import { Button } from "@cmsgov/ds-medicare-gov";
import { getRandomItem } from "./helpers/dataHelpers";
import { ItemType } from "./@types";

const NUM_QUESTIONS = 5;

const App: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(getRandomItem());
  const [guessResult, setGuessResult] = useState<undefined | boolean>(undefined);
  const [numCorrect, setNumCorrect] = useState(0);
  const [usedNames, setUsedNames] = useState<string[]>([])

  const checkAnswer = (type: ItemType): void => {
    if (type === currentItem.type) {
      setNumCorrect(numCorrect + 1);
      setGuessResult(true);
    } else {
      setGuessResult(false);
    }
  }

  const resetQuestion = (): void => {
    const latestUsedNames = [...usedNames, currentItem.name];
    setUsedNames(latestUsedNames);
    setCurrentItem(getRandomItem(latestUsedNames));
    setGuessResult(undefined);
  }

  const resetGame = (): void => {
    resetQuestion();
    setNumCorrect(0);
    setUsedNames([]);
  }

  return (
    <main className="App ds-u-margin--2 ds-u-sm-margin--7">
      <h1 className="ds-h1">Drug or Wizard?</h1>
      <section 
        aria-label="final-results"
        aria-live="polite"
        aria-atomic={false}
      >
        {usedNames.length === NUM_QUESTIONS && (
          <>
            <p>You got {numCorrect} of {NUM_QUESTIONS} correct!</p>
            <Button variation="primary" onClick={resetGame}>play again with different questions</Button>
          </>
        )}
      </section>
      <section
        aria-label="game area"
        aria-live="polite"
        aria-atomic={false}
      >
        {usedNames.length !== NUM_QUESTIONS && (
          <>
            <section
              aria-label="question"
              aria-live="polite"
              aria-atomic={false}
            >
              {guessResult === undefined && (
                <>
                  <p>
                    {currentItem.name}
                  </p>
                  <Button variation="primary" onClick={() => checkAnswer(ItemType.DRUG)}>
                    drug
                  </Button>
                  {" "}or{" "}
                  <Button className="ds-c-button--primary-alt" onClick={() => checkAnswer(ItemType.WIZARD)}>
                    wizard
                  </Button>
                </>
              )}
            </section>

            <section
              aria-label="question result"
              aria-live="polite"
              aria-atomic={false}
            >
              {guessResult !== undefined && (
                <>
                  <p>
                    {guessResult
                      ? <span className="correct">Correct!</span>
                      : <span className="wrong">Wrong!</span>
                    }
                  </p>
                  <p className="item-description">{currentItem.name} {currentItem.description}</p>
                  <Button variation="primary" onClick={resetQuestion}>next</Button>
                </>
              )}
            </section>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
