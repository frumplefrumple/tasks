import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, updateAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function DecreaseCount(): void {
        updateAttempts(numAttempts - 1);
    }
    function IncreaseCount(): void {
        updateAttempts(numAttempts + 1);
    }
    function StopStart(): void {
        inProgress === false ? setProgress(true) : setProgress(false);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    DecreaseCount();
                    StopStart();
                }}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={StopStart} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={IncreaseCount} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Attempts: {numAttempts}</div>
        </div>
    );
}
