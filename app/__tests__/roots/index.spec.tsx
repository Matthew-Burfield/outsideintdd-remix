import {render, screen} from '@testing-library/react';
import Index from "../../routes/index";

describe('home page', () => {
  it('should contain home page content', () => {
    render(<Index />);
    // console.log(expect(screen.getByRole('heading')));
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to Remix');
  })
})
