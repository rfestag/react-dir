import React from "react";
import { mount } from "../enzyme";

import Dir from "./Dir";

const DirAtomic = Dir.__get__("DirAtomic");
const DirArray = Dir.__get__("DirArray");
const DirObject = Dir.__get__("DirObject");
const CollapsedArray = Dir.__get__("CollapsedArray");
const ClosedArray = Dir.__get__("ClosedArray");
const OpenArray = Dir.__get__("OpenArray");
const CollapsedObject = Dir.__get__("CollapsedObject");
const ClosedObject = Dir.__get__("ClosedObject");
const OpenObject = Dir.__get__("OpenObject");
const More = Dir.__get__("More");

describe("Dir tests", () => {
  describe("Atomic values", () => {
    it("renders null values", () => {
      const wrapper = mount(<Dir value={null} />);
      const atomic = wrapper.find(DirAtomic);
      expect(atomic.length).toEqual(1);
      expect(atomic.text()).toEqual("null");
    });
    it("renders undefined values", () => {
      const wrapper = mount(<Dir value={undefined} />);
      const atomic = wrapper.find(DirAtomic);
      expect(atomic.length).toEqual(1);
      expect(atomic.text()).toEqual("undefined");
    });
    it("renders NaN values", () => {
      const wrapper = mount(<Dir value={NaN} />);
      const atomic = wrapper.find(DirAtomic);
      expect(atomic.length).toEqual(1);
      expect(atomic.text()).toEqual("NaN");
    });
    it("renders numeric values", () => {
      const wrapper = mount(<Dir value={123} />);
      const atomic = wrapper.find(DirAtomic);
      expect(atomic.length).toEqual(1);
      expect(atomic.text()).toEqual("123");
    });
    it("renders boolean values", () => {
      const wrapper = mount(<Dir value={true} />);
      const atomic = wrapper.find(DirAtomic);
      expect(atomic.length).toEqual(1);
      expect(atomic.text()).toEqual("true");
    });
    it("renders string values", () => {
      const wrapper = mount(<Dir value={"String"} />);
      const atomic = wrapper.find(DirAtomic);
      expect(atomic.length).toEqual(1);
      expect(atomic.text()).toEqual('"String"');
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
      expect(atomic.length).toEqual(3);
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
      expect(atomic.length).toEqual(11);
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
      expect(atomic.length).toEqual(2);
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
      closed.simulate("click");
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
      expect(atomic.length).toEqual(2);
    });
  });
});
