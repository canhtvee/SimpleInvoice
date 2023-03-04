// To mock query-string
jest.mock('query-string', () => ({stringify: () => null}));
