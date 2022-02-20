import { server } from "../msw/server";

beforeAll(() => server.listen());

// Reset the server handlers after each test incase we add different
// handlers for error/edge cases
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

