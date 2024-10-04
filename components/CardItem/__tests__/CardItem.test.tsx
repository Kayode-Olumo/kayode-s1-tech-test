import { render, screen } from "@testing-library/react";
import CardItem from "../CardItem";

describe("CardItem Component", () => {
  const defaultProps = {
    name: "Product Name",
    company: "Company Name",
    code: "PRD001",
    price: 12345.67,
  };

  it("renders the component with correct data", () => {
    // Render the component with default props
    render(<CardItem {...defaultProps} />);

    expect(screen.getByTestId("card-name")).toHaveTextContent("Product Name");
    expect(screen.getByTestId("card-company")).toHaveTextContent(
      "Company Name"
    );
    expect(screen.getByTestId("card-code")).toHaveTextContent("PRD001");
    expect(screen.getByTestId("card-price")).toHaveTextContent("£12,345.67");
  });

  it("applies highlight class when highlight is true", () => {
    render(<CardItem {...defaultProps} highlight={true} />);

    // Check if the highlight class is applied
    const cardElement = screen.getByTestId("card-item");
    expect(cardElement).toHaveClass("bg-orange-100");
  });

  it("does not apply highlight class when highlight is false", () => {
    // Render the component with highlight set to false
    render(<CardItem {...defaultProps} highlight={false} />);

    // Check if the highlight class is not applied
    const cardElement = screen.getByTestId("card-item");
    expect(cardElement).not.toHaveClass("bg-orange-100");
  });

  it("formats price with commas correctly", () => {
    // Render the component with a different price
    render(<CardItem {...defaultProps} price={1234567} />);

    // Check if the price is formatted correctly
    expect(screen.getByTestId("card-price")).toHaveTextContent("£1,234,567.00");
  });
});
