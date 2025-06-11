

import { expect, test } from 'vitest'
import { render } from "@testing-library/react";
import App from "./App";

test("renders h1", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Drug or Wizard?/i)).toBeInTheDocument();
});