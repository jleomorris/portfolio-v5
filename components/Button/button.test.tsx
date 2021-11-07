import React from 'react';
import { render, screen } from 'test/test-utils';
import userEvent from '@testing-library/user-event';
import Button, { Variant, Size } from '@components/button';

describe('<Button />', () => {
  const onClickFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Displays button with base classes', () => {
    render(<Button>Test Button</Button>);

    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'flex justify-between align-middle items-center transition ease-in-out duration-300'
    );
  });

  it('Displays button with black variant and normal size classes', () => {
    render(
      <Button variant={Variant.BLACK} size={Size.NORMAL}>
        Test Button
      </Button>
    );

    const button = screen.getByText('Test Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'bg-black-light hover:bg-black-lightest text-white rounded-button py-2.5 px-8/50'
    );
  });

  it('Fires onClick function when button pressed', () => {
    render(<Button onClick={onClickFn}>Test Button</Button>);

    const button = screen.getByText('Test Button');
    userEvent.click(button);
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
