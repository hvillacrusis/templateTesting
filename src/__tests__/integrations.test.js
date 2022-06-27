/* eslint-disable testing-library/await-async-utils */
import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        name: 'New fetched comment 1',
      },
      {
        name: 'New fetched comment 2',
      },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const component = mount(
    <Root>
      <App></App>
    </Root>
  );

  component.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    component.update();
    expect(component.find('li').length).toEqual(2);
    done();
    component.unmount();
  });
});
