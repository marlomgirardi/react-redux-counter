import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import { DisplayCounter } from './DisplayCounter'

configure({ adapter: new Adapter() })

describe('<DisplayCounter />', () => {
  it('mounts', () => {
    const wrapper = shallow(<DisplayCounter count={10} />)
    expect(wrapper.contains(<p>Counter is in 10</p>)).toBe(true)
  })
})
