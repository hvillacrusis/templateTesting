import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  const intialState = {
    comments: ['Comment 1', 'Comment 2'],
  };
  component = mount(
    <Root initialState={intialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('creates one LI per comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows text for each comment', () => {
  expect(component.render().text()).toContain('Comment 1')
  expect(component.render().text()).toContain('Comment 2')
})