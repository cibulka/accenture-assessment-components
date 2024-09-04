import { fn } from "@storybook/test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import { IconHeart } from "../../icons/heart";
import { Button } from "./button";
import { ButtonVariant } from "./types";

const text = "My button";

describe("<Button />", () => {
  it("renders Button with variants", () => {
    Object.values(ButtonVariant).map((variant) => {
      render(<Button variant={variant}>{variant}</Button>);
      expect(screen.getByText(variant)).toBeInTheDocument();
    });
  });
  it("renders fullWidth Button", () => {
    render(<Button fullWidth>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  it("renders Button with icon", () => {
    render(<Button icon={<IconHeart />} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders Button with different types", () => {
    const types = ["submit", "button", "reset"] as const;
    types.forEach((type) => {
      render(<Button type={type}>{type}</Button>);
      const button = screen.getByText(type);
      expect(button.getAttribute("type")).equals(type);
    });
  });
  it("test Button with onClick on disabled button", async () => {
    const onClick = fn();
    render(
      <Button onClick={onClick} disabled>
        {text}
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it("renders non-interactive Button", async () => {
    const onClick = fn();
    render(
      <button onClick={onClick}>
        <Button fullWidth component="span">
          {text}
        </Button>
      </button>
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("test Button with onClick", async () => {
    const onClick = fn();
    render(<Button onClick={onClick}>{text}</Button>);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
