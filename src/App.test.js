import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders the title", () => {
    render(<App />);
    const title = screen.getByText('Products');
    expect(title).toBeInTheDocument();
  });
});
