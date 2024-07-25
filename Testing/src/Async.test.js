import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {

    test("test data has been recieved", async () => {


        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json :  async () =>[{ id : "p1", title : "first post"}]
        });

        render(<Async />);

        const listItemsElements = await screen.findAllByRole("listitem");
        expect(listItemsElements).not.toHaveLength(0);
    })
});
