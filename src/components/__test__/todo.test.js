import {cleanup, render, screen} from '@testing-library/react';

import Todo from '../todo';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup()
});

test('should render non-completed todo', () => {
    const todo = {id:1, title:'Some first task', completed:false,};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Some first task');
    expect(todoElement).not.toContainHTML('strike');
});

test('should render completed todo', () => {
    const todo = {id:2, title:'Some second task', completed:true,};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Some second task');
    expect(todoElement).toContainHTML('strike');
});

test('matches snapshot', () => {
    const todo = {id:1, title:'Some first task', completed:false,};
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});