import { cleanup, render, screen } from "@testing-library/react";
import Home from "..";

afterEach(cleanup)

describe('hsould render the components', () => {
    it('should render options', () => {
        render(<Home />)
        expect(screen.getByTestId('options')).toBeVisible()
    })

    it('should render info', () => {
        render(<Home />)
        expect(screen.getByTestId('info')).toBeVisible()
    })

    it('should render menu', () => {
        render(<Home />)
        expect(screen.getByTestId('menu')).toBeVisible()
    })
})