import { render, screen } from '@testing-library/react';
import App from './App';
import { usePosts } from './usePost';

jest.mock('./usePost', () => ({ usePosts: jest.fn() }));

test('renders a loading state while posts are being fetched', () => {
  usePosts.mockReturnValue({ isPending: true });
  render(<App />);
  expect(screen.getByText('Loading.....')).toBeInTheDocument();
});
