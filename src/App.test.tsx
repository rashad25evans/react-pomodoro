import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders all components", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
