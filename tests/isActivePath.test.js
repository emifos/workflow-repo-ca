import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const currentPath = "/index.html";
    const href = "/index.html";
    expect(isActivePath(currentPath, href)).toBe(true);
  });

  it("returns true for root path when current path is / or /index.html", () => {
    const href = "/";
    const currentPath1 = "/";
    const currentPath2 = "/index.html";

    expect(isActivePath(href, currentPath1)).toBe(true);
    expect(isActivePath(href, currentPath2)).toBe(true);
  });

  it("returns true when current path includes href", () => {
    const href = "/venues";
    const currentPath = "/venues/123";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  it("returns false when current path doesn't match", () => {
    const href = "/venues";
    const currentPath = "/events/123";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
