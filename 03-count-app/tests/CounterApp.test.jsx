import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas counter app', () => { 
   const initialValue = 10;
  test('Debe hacer match con el snapshot', () => { 
      const {container} = render(<CounterApp/>);
      expect(container).toMatchSnapshot();
   });

   test('Debe iniciar con el valor de 100', () => { 
      render(<CounterApp value={100}/>);
      expect(screen.getByText("100")).toBeTruthy();
    });

    test('Debe de incrementar con el boton +1', () => { 
      render(<CounterApp value = {initialValue}/>);
      fireEvent.click(screen.getByText("+1"));
      expect(screen.getAllByText(initialValue + 1)).toBeTruthy();

     });

     test('Debe de disminuir con el boton -1', () => { 
      render(<CounterApp value = {initialValue}/>);
      fireEvent.click(screen.getByText("-1"));
      expect(screen.getAllByText(initialValue - 1)).toBeTruthy();
     });

     test('Debe de volver al valor inicial con el boton Reset', () => { 
      render(<CounterApp value = {initialValue}/>);
      fireEvent.click(screen.getByText("+1"));
      fireEvent.click(screen.getByText("+1"));
      fireEvent.click(screen.getByText("+1"));
      fireEvent.click(screen.getByRole("button", {name:"btn-reset"}));
      expect(screen.getAllByText(initialValue)).toBeTruthy();
     });

     
 })