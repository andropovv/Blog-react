import { classNames } from "./classNames";

describe("classNames", () => {
  test("first arg", () => {
    expect(classNames("class")).toBe("class");
  });

  test("with additional", () => {
    expect(classNames("class", {}, ["cls1", "cls2"])).toBe("class cls1 cls2");
  });

  test("with additional and mods", () => {
    expect(
      classNames("class", { mod1: true, mod2: false }, ["cls1", "cls2"])
    ).toBe("class cls1 cls2 mod1");
  });
});
