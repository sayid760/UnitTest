import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
 
import App, { Counter, dataReducer } from './App';
 
const list = ['a', 'b', 'c'];
 
describe('App', () => {
 
  it('Example component', function () {
      const name='按钮名'
      let app = shallow(<Example text={name} />)
      let btnName=app.find('button').text();
      console.log('button Name:'+btnName)
  })

  // test('snapshot renders', () => {
  //   const component = renderer.create(<App />);
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
 
  // it('renders the inner Counter', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find(Counter).length).toEqual(1);
  // });
});
 