// vitest.d.ts
import "@testing-library/jest-dom/vitest";

declare global {
  namespace Vi {
    type Assertion = jest.Matchers<void>;
  }
}
