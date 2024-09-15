import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

describe("Button", () => {
  test("render", () => {
    render(<Button>sd</Button>);
    expect(screen.getByText("sd")).toBeInTheDocument();
  });

  test("clear theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>sd</Button>);
    expect(screen.getByText("sd")).toHaveClass("clear");
  });
});
