import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/index.html", "/index.html")).toBe(true);
  });

  it("returns true for root path when current path is / or /index.html", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venues", "/venues/123")).toBe(true);
  });

  it("returns false when current path doesn't match", () => {
    expect(isActivePath("/venues", "/events/123")).toBe(false);
  });
});
