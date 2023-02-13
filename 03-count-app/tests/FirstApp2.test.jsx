import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas firstApp', () => { 
    const title = "holo perrin";
    test('Debe hacer match con el snapshot', () => { 
      const {container} = render(<FirstApp title={title}/>);
      expect(container).toMatchSnapshot();
    });
    
    test('Debe de mostrar el mensaje "Holo perrin"', () => { 
      render(<FirstApp title={title}/>);
      //screen.debug() para ver el objeto screen
      expect(screen.getByText(title)).toBeTruthy();
     })

    test('Dede de mostrar el titulo en un h1', () => { 
      render(<FirstApp title={title}/>);
      expect(screen.getByRole('heading',{level:1}).textContent).toContain(title);
    })
 })