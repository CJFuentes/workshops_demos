import { createUser, getUserById } from './users.service';

describe('users.service', () => {
  describe('createUser', () => {
    it('returns ok with user when input is valid', () => {
      const result = createUser({ name: 'Alice', email: 'alice@example.com' });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.data.name).toBe('Alice');
        expect(result.data.id).toBeDefined();
      }
    });

    it('returns err when email is invalid', () => {
      const result = createUser({ name: 'Bob', email: 'not-an-email' });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error).toBeDefined();
      }
    });

    it('returns err when name is missing', () => {
      const result = createUser({ email: 'carol@example.com' });
      expect(result.ok).toBe(false);
    });
  });
});
