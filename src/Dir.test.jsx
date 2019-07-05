import React from "react";
import { mount } from "../enzyme";
import { DirAtomic } from "./DirAtomic";
import { DirRegex, ClosedRegex } from "./DirRegex";
import { DirArray, OpenArray, ClosedArray, CollapsedArray } from "./DirArray";
import {
  DirObject,
  OpenObject,
  ClosedObject,
  CollapsedObject
} from "./DirObject";
import { More } from "./DirCommon";
import Dir from "./Dir";

const atomicValueIs = (value, result) => {
  const wrapper = mount(<Dir value={value} />);
  const atomic = wrapper.find(DirAtomic);
  expect(atomic.length).toEqual(1);
  expect(atomic.text()).toEqual(result);
};
describe("Dir tests", () => {
  describe("Atomic values", () => {
    it("renders null values", () => {
      atomicValueIs(null, "null");
    });
    it("renders undefined values", () => {
      atomicValueIs(undefined, "undefined");
    });
    it("renders NaN values", () => {
      atomicValueIs(NaN, "NaN");
    });
    it("renders numeric values", () => {
      atomicValueIs(123, "123");
    });
    it("renders boolean values", () => {
      atomicValueIs(true, "true");
    });
    it("renders string values", () => {
      atomicValueIs("String", '"String"');
    });
  });
  describe("Regex values", () => {
    it("renders regex values", () => {
      const wrapper = mount(<DirRegex value={/[a-zA-Z]{3}/} />);
      const closed = wrapper.find(ClosedRegex);
      expect(closed.length).toEqual(1);
    });
  });
  describe("Array values", () => {
    it("renders closed by default", () => {
      const wrapper = mount(<DirArray value={[1, 2, 3]} />);
      const closed = wrapper.find(ClosedArray);
      expect(closed.length).toEqual(1);
    });
    it("opens/closes after click", () => {
      const wrapper = mount(<DirArray value={[1, 2, 3]} />);
      let closed = wrapper.find(ClosedArray);
      closed.simulate("click");
      const open = wrapper.find(OpenArray);
      expect(open.length).toEqual(1);
      let atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(4);
      open.find(CollapsedArray).simulate("click");
      closed = wrapper.find(ClosedArray);
      expect(closed.length).toEqual(1);
    });
    it("expands after 'more' click", () => {
      const wrapper = mount(
        <DirArray value={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
      );
      const closed = wrapper.find(ClosedArray);
      closed.simulate("click");
      let open = wrapper.find(OpenArray);
      expect(open.length).toEqual(1);
      let atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(10);
      const more = wrapper.find(More);
      more.simulate("click");
      open = wrapper.find(OpenArray);
      atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(12);
    });
    it("handles nested arrays", () => {
      const wrapper = mount(<DirArray value={[[1, 2]]} />);
      let closed = wrapper.find(ClosedArray);
      closed.simulate("click");
      let open = wrapper.find(OpenArray);
      closed = open.find(ClosedArray);
      closed.simulate("click");
      open = open.find(OpenArray);
      expect(open.length).toEqual(1);
      const atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(3);
    });
  });
  describe("Object values", () => {
    it("renders closed by default", () => {
      const wrapper = mount(<DirObject value={{ a: 1, b: 2 }} />);
      const closed = wrapper.find(ClosedObject);
      expect(closed.length).toEqual(1);
    });
    it("opens/closes after click", () => {
      const wrapper = mount(<DirObject value={{ a: 1, b: 2 }} />);
      let closed = wrapper.find(ClosedObject);
      closed.simulate("click");
      const open = wrapper.find(OpenObject);
      expect(open.length).toEqual(1);
      let atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(2);
      open.find(CollapsedObject).simulate("click");
      closed = wrapper.find(ClosedObject);
      expect(closed.length).toEqual(1);
    });
    it("expands after 'more' click", () => {
      const wrapper = mount(
        <DirObject
          value={{
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6,
            g: 7,
            h: 8,
            i: 9,
            j: 10,
            k: 11
          }}
        />
      );
      const closed = wrapper.find(ClosedObject);
      closed.simulate("click");
      let open = wrapper.find(OpenObject);
      expect(open.length).toEqual(1);
      let atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(10);
      const more = wrapper.find(More);
      more.simulate("click");
      open = wrapper.find(OpenObject);
      atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(11);
    });
    it("handles nested objects", () => {
      const wrapper = mount(<DirObject value={{ a: { b: 1, c: 2 } }} />);
      let closed = wrapper.find(ClosedObject);
      closed.simulate("click");
      let open = wrapper.find(OpenObject);
      closed = open.find(ClosedObject);
      closed.first().simulate("click");
      open = open.find(OpenObject);
      expect(open.length).toEqual(1);
      const atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(2);
    });
    it("handles nested arrays", () => {
      const wrapper = mount(<DirObject value={{ a: [1, 2] }} />);
      let closed = wrapper.find(ClosedObject);
      closed.simulate("click");
      let open = wrapper.find(OpenObject);
      closed = open.find(ClosedArray);
      closed.simulate("click");
      open = wrapper.find(OpenArray);
      expect(open.length).toEqual(1);
      const atomic = open.find(DirAtomic);
      expect(atomic.length).toEqual(3);
    });
  });
});
