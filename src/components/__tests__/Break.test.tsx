import { render, cleanup } from '@testing-library/react';
import Break from '../Break';

afterEach(cleanup);

test('renders and dispays the element that contains a string "Break Length"', () => {
  const { getByText } = render(<Break />);
  expect(getByText('Break Length')).toBeInTheDocument();
});
