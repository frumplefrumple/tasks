import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Xuan Tran: UD CISC275 with React Hooks and TypeScript Hello
                World
            </header>
            return <h1> This is a header </h1>
            return <p>Random text to make a paragraph</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img
                src="https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg"
                alt="A picture of a happy guy"
            />
            <Container>
                <Row>
                    <Col>
                        return{" "}
                        <div>
                            This is
                            <span style={{ color: "red" }}> colored text</span>
                        </div>
                    </Col>
                    <Col>
                        <p>Second column paragraph test</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
