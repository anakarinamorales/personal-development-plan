import { mount } from 'enzyme';

import Title from './Title';

/** @test {Title Component} */
describe('Title Component h1', () => {
  it('should render a h1 tag', () => {
    const wrapper = mount(<Title type='h1' text='Test' />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});

describe('Title Component h2', () => {
  it('should render a h2 tag', () => {
    const wrapper = mount(<Title type='h2' text='Test' />);

    expect(wrapper.find('h2')).toHaveLength(1);
  });
});

describe('Title Component h3', () => {
  it('should render a h3 tag', () => {
    const wrapper = mount(<Title type='h3' text='Test' />);

    expect(wrapper.find('h3')).toHaveLength(1);
  });
});

describe('Title Component h4', () => {
  it('should render a h4 tag', () => {
    const wrapper = mount(<Title type='h4' text='Test' />);

    expect(wrapper.find('h4')).toHaveLength(1);
  });
});

describe('Title Component h5', () => {
  it('should render a h5 tag', () => {
    const wrapper = mount(<Title type='h5' text='Test' />);

    expect(wrapper.find('h5')).toHaveLength(1);
  });
});

describe('Title Component h6', () => {
  it('should render a h6 tag', () => {
    const wrapper = mount(<Title type='h6' text='Test' />);

    expect(wrapper.find('h6')).toHaveLength(1);
  });
});