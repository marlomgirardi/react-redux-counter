import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { Counter } from './Counter'

configure({ adapter: new Adapter() });

describe('<Counter />', () => {
  it('mounts', () => {
    const props = {
      count: 10,
      increment: () => 0,
      decrement: () => 0
    }
    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('.counter').text()).toEqual('10')
  })

  it('calls increment', () => {
    const props = {
      count: 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }
    const wrapper = shallow(<Counter {...props} />)
    expect(props.increment.mock.calls.length).toEqual(0)
    wrapper.find('.increment').simulate('click')
    expect(props.increment.mock.calls.length).toEqual(1)
  })

  it('calls decrement', () => {
    const props = {
      count: 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }
    const wrapper = shallow(<Counter {...props} />)
    expect(props.decrement.mock.calls.length).toEqual(0)
    wrapper.find('.decrement').simulate('click')
    expect(props.decrement.mock.calls.length).toEqual(1)
  })
})