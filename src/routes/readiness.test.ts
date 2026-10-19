import { describe, it, expect } from "vitest";
import { scoreBand } from "./readiness";

describe("readiness score bands", () => {
  it("11+ is high exposure", () => expect(scoreBand(11).label).toBe("High exposure"));
  it("6–10 is moderate", () => { expect(scoreBand(6).label).toBe("Moderate exposure"); expect(scoreBand(10).label).toBe("Moderate exposure"); });
  it("under 6 is lower", () => expect(scoreBand(5).label).toBe("Lower exposure"));
});
