import { render, screen } from "@testing-library/react";
import App from "./App";

test("food bank", () => {
	render(<App />);
	const linkElement = screen.getByText(/food bank/i);
	expect(linkElement).toBeInTheDocument();
});
