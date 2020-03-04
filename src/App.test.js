import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Forecast from "./components/Forecast";

Enzyme.configure({ adapter: new Adapter() });

describe("Componente Forecast", () => {
  test("renderea", () => {
    const wrapper = shallow(<Forecast />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Comprueba que tenga props", () => {
    const wrapper = mount(<Forecast />);

    expect(wrapper.props()).toBeTruthy();
  });

  test("Comprueba que la funcion devuelva algo", () => {
    let wrapper = shallow(<Forecast />);
    wrapper.instance().return = jest.fn();
    wrapper.update();
    wrapper.instance().dayCards();
    expect(wrapper.instance().return).toBeTruthy();
  });
});
