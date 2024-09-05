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
  it("renders Checkbox with error", () => {
    render(<Checkbox label={text} error />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("renders disabled Checkbox", () => {
    render(<Checkbox label={text} disabled />);
    const checkbox = screen.getByRole("checkbox");
    console.log(checkbox);
    expect(checkbox).toHaveAttribute("disabled");
  });
});
