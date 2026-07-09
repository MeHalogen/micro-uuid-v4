import { describe, it, expect } from 'vitest';
import { uuid } from '../src/index.js';

describe('micro-uuid-v4', () => {
  it('should generate valid UUID v4', () => {
    const id = uuid();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
});
