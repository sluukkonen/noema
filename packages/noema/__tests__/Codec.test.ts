import { createCodec, createSimpleCodec, success } from "../src/index.js"

describe("codec constructors", () => {
  test("createCodec with two arguments argument assigns default metadata", () => {
    const codec = createCodec(
      (val) => success(val),
      (val) => val
    )
    expect(codec.metadata).toEqual({ tag: "unknown", simple: false })
  })

  test("createSimpleCodec with one arguments argument assigns default metadata", () => {
    const codec = createSimpleCodec((val) => success(val))
    expect(codec.metadata).toEqual({ tag: "unknown", simple: true })
  })
})
