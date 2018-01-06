import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';
import { user } from '../fixtures';

test('Renders correctly', () => {
  const component = renderer.create(
    <Card user={user} onCardClick={() => {}} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders correctly when is current user', () => {
  const component = renderer.create(
    <Card user={user} currentUserId={user.id} onCardClick={() => {}} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
