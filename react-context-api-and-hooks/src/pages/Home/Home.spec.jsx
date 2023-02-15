import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Home } from '.'

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: "title1",
        body: "body1",
        url: 'img1.jpg'

      },
      {
        userId: 2,
        id: 2,
        title: "title2",
        body: "body2",
        url: 'img2.jpg'
      },
      {
        userId: 3,
        id: 3,
        title: "title3",
        body: "body3",
        url: 'img3.jpg'
      },
    ]))
  }),
]

const server = setupServer(...handlers)

describe('<Home />', () => { 
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  it('should render search, posts and posts load more', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText('There are no posts :(')

    expect.assertions(3)
    await waitForElementToBeRemoved(noMorePosts)

    const search = screen.getByPlaceholderText(/type your search/i)
    expect(search).toBeInTheDocument()

    const images = screen.getAllByRole('img', { name: /title/i} )
    expect(images).toHaveLength(3)

    const button = screen.getByRole('button', { name: /load more post/i} )
    expect(button).toBeInTheDocument()
  });

  it('should search for posts', async () => {
    render(<Home />)
    const noMorePosts = screen.getByText('There are no posts :(')

    expect.assertions(7)
    await waitForElementToBeRemoved(noMorePosts)

    const search = screen.getByPlaceholderText(/type your search/i)
    
    expect(screen.getByRole('heading', {name: 'title1'})).toBeInTheDocument()
    expect(screen.getByRole('heading', {name: 'title2'})).toBeInTheDocument()
    expect(screen.queryByRole('heading', {name: 'title4'})).not.toBeInTheDocument()

    userEvent.type(search, 'title1')
    expect(screen.getByRole('heading', {name: 'title1'})).toBeInTheDocument()
    
    userEvent.clear(search)
    expect(screen.getByRole('heading', {name: 'title1'})).toBeInTheDocument()
    expect(screen.getByRole('heading', {name: 'title2'})).toBeInTheDocument()

    userEvent.type(search, 'post doe not exist')
    expect(screen.getByText('There are no posts :(')).toBeInTheDocument()
  });
})

