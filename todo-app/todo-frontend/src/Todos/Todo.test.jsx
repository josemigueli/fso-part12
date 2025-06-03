import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  it("renders the todo text", () => {
    const todo = { text: "Buy milk", done: false };
    render(<Todo todo={todo} onDelete={() => {}} onComplete={() => {}} />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });
});
