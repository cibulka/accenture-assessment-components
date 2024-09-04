import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import { Checkbox } from "./checkbox";

const text = "My checkbox";

describe("<Checkbox />", () => {
  it("renders Checkbox with label", () => {
    render(<Checkbox label={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
