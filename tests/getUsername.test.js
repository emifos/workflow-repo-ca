import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "Jane" };
    localStorage.setItem("user", JSON.stringify(user));
    expect(getUsername()).toBe("Jane");
  });
});
