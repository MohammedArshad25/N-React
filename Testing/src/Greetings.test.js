import { render, screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";

import Greetings from "./Greetings";

describe("Greetings componene", () => {
    test("renders hello world as text", () => {
        render(<Greetings/>)

        const hellowWorldElement = screen.getByText("Hello World");
        expect(hellowWorldElement).toBeInTheDocument();
    });


    test("you didnt click me", () => {
        render(<Greetings/>);

        const didntClickElem = screen.getByText("you didn't click the button yet");
        expect(didntClickElem).toBeInTheDocument();
    });

    test("clicked text is rendered", () => {
        render(<Greetings/>);

        const buttonElem = screen.getByRole("button");
        userEvent.click(buttonElem);

        const clickedElem = screen.getByText("clicked");
        expect(clickedElem).toBeInTheDocument();
    });


    test("you didnt click should not render when clicked", () => {
        render(<Greetings />);

        const buttonElem = screen.getByRole("button");
        userEvent.click(buttonElem);

        const didntClickElem = screen.queryByText("you didn't click the button yet");
        expect(didntClickElem).toBeNull();

    });

});
