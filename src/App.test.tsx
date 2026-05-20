import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza mensagem principal", () => {
  render(<App />);

  const elemento = screen.getByText(/Bem-vindo ao projeto de DevOps/i);

  expect(elemento).toBeInTheDocument();
});
