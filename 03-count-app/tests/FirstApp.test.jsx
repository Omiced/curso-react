import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas firstApp', () => { 
  // test('Debe hacer match con el snapshot', () => { 
  //   const titulo = "que onda men";
  //   const {container } = render(<FirstApp title = {titulo}/>);
  //   //esta prueba puede ser mucha utilidad
  //   //esta prueba hace una foto del estado actual del componente y lo compara
  //   //si cambio es necesario actualizar el snapshot para que la prueba pase
  //   expect(container).toMatchSnapshot();
  //  });
   test('Debe de mostrar el titulo en un h1', () => { 
    const titulo = "que onda men";
    const {container,getByText, getByTestId } = render(<FirstApp title = {titulo}/>);
    expect(getByText(titulo)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.textContent).toContain(titulo);
    expect(getByTestId('test-title').textContent).toContain(titulo);
    });

    test('Debe mostrar el subtitulo enviado por props', () => { 
      const title = "hola men xd";
      const subtitle = "hola men xd";
      const {getAllByText} = render(<FirstApp title={title}  subtitle={subtitle}/>);
      expect(getAllByText(subtitle).length).toBe(2);
    })
 })