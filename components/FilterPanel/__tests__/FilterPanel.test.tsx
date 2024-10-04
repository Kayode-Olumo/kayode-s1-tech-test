import { render, screen, fireEvent } from "@testing-library/react";
import FilterPanel from "../FilterPanel";

describe("FilterPanel Component", () => {
  const mockSortOrder = "asc";
  const mockSetSortOrder = jest.fn();
  const mockMinPrice = "0";
  const mockMaxPrice = "100";
  const mockSetMinPrice = jest.fn();
  const mockSetMaxPrice = jest.fn();
  const mockMinPriceOptions = [0, 10, 20, 30];
  const mockMaxPriceOptions = [50, 60, 70, 100];
  const mockToggleSortOrder = jest.fn();
  const mockShowCheapest = false;
  const mockSetShowCheapest = jest.fn();

  it("renders with the correct initial values", () => {
    // Render the component with the mock props
    render(
      <FilterPanel
        sortOrder={"asc"}
        setSortOrder={() => {}}
        minPrice={"00"}
        maxPrice={mockMaxPrice}
        setMinPrice={mockSetMinPrice}
        setMaxPrice={mockSetMaxPrice}
        minPriceOptions={mockMinPriceOptions}
        maxPriceOptions={mockMaxPriceOptions}
        toggleSortOrder={mockToggleSortOrder}
        showCheapest={mockShowCheapest}
        setShowCheapest={mockSetShowCheapest}
      />
    );

    // Check if the initial sort order button is rendered
    // const sortOrderButton = screen.getByTestId("sort-order-toggle");
    // expect(sortOrderButton).toBeInTheDocument();

    // Check if min and max price options are rendered
    expect(screen.getByTestId("min-price-0")).toBeInTheDocument();
    expect(screen.getByTestId("max-price-100")).toBeInTheDocument();
  });

  it("calls setMinPrice when a min price is selected", () => {
    // Render the component with the mock props
    render(
      <FilterPanel
        sortOrder={mockSortOrder}
        setSortOrder={mockSetSortOrder}
        minPrice={mockMinPrice}
        maxPrice={mockMaxPrice}
        setMinPrice={mockSetMinPrice}
        setMaxPrice={mockSetMaxPrice}
        minPriceOptions={mockMinPriceOptions}
        maxPriceOptions={mockMaxPriceOptions}
        toggleSortOrder={mockToggleSortOrder}
        showCheapest={mockShowCheapest}
        setShowCheapest={mockSetShowCheapest}
      />
    );

    // Simulate selecting a min price
    const minPriceOption = screen.getByTestId("min-price-10");
    fireEvent.click(minPriceOption);

    // Check if the setMinPrice function is called with the correct value
    expect(mockSetMinPrice).toHaveBeenCalledWith("10");
  });

  it("calls toggleSortOrder when sort order is toggled", () => {
    // Render the component
    render(
      <FilterPanel
        sortOrder={mockSortOrder}
        setSortOrder={mockSetSortOrder}
        minPrice={mockMinPrice}
        maxPrice={mockMaxPrice}
        setMinPrice={mockSetMinPrice}
        setMaxPrice={mockSetMaxPrice}
        minPriceOptions={mockMinPriceOptions}
        maxPriceOptions={mockMaxPriceOptions}
        toggleSortOrder={mockToggleSortOrder}
        showCheapest={mockShowCheapest}
        setShowCheapest={mockSetShowCheapest}
      />
    );

    // Simulate the user toggling the sort order
    const toggleSortOrderButton = screen.getByTestId("sort-order-toggle");
    fireEvent.click(toggleSortOrderButton);

    // Verify that toggleSortOrder was called
    expect(mockToggleSortOrder).toHaveBeenCalled();
  });
});
