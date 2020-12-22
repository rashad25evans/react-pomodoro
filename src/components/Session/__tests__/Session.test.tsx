import { render, cleanup } from '@testing-library/react';
import Session from '../Session';

afterEach(cleanup);

test('renders and dispays the element that contains a string "Break Length"', () => {
  const { getByText } = render(<Session />);
  expect(getByText('Session Length')).toBeInTheDocument();
});
