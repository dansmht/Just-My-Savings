import { mount, VueWrapper } from "@vue/test-utils";

import SavingsInput from "./SavingsInput.vue";

describe("SavingsInput", () => {
  let wrapper: VueWrapper<InstanceType<typeof SavingsInput>>;

  beforeEach(() => {
    wrapper = mount(SavingsInput, {
      props: {
        modelValue: 1234567890,
      },
    });
  });

  it("should mount", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have input and span elements", () => {
    expect(wrapper.get("input")).toBeTruthy();
    expect(wrapper.get("span")).toBeTruthy();
  });

  it("should display formatted value on input and span", async () => {
    const inputEl = wrapper.get("input");
    const spanEl = wrapper.get("span");

    expect(inputEl.element.value).toBe("1 234 567 890");
    expect(spanEl.text()).toBe("1 234 567 890");
  });

  it("should display savings without spaces on focus", async () => {
    const inputEl = wrapper.get("input");
    const spanEl = wrapper.get("span");

    await inputEl.trigger("focus");

    expect(inputEl.element.value).toBe("1234567890");
    expect(spanEl.text()).toBe("1234567890");
  });

  it("should display savings with spaces on blur", async () => {
    const inputEl = wrapper.get("input");
    const spanEl = wrapper.get("span");

    await inputEl.trigger("focus");
    await inputEl.trigger("blur");

    expect(inputEl.element.value).toBe("1 234 567 890");
    expect(spanEl.text()).toBe("1 234 567 890");
  });

  it("should emit update:modelValue on blur", async () => {
    const inputEl = wrapper.get("input");

    await inputEl.trigger("focus");
    await inputEl.trigger("blur");

    expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
  });

  it("should remove extra symbols on input", async () => {
    const inputEl = wrapper.get("input");

    await inputEl.setValue("123456789012");

    expect(inputEl.element.value).toBe("1234567890");

    await inputEl.trigger("blur");

    expect(inputEl.element.value).toBe("1 234 567 890");
  });

  it("should remove non-digital symbols on input", async () => {
    const inputEl = wrapper.get("input");

    await inputEl.setValue("123a $4");

    expect(inputEl.element.value).toBe("1234");

    await inputEl.trigger("blur");

    expect(inputEl.element.value).toBe("1 234");
  });

  it("should prevent keypress on space", async () => {
    const inputEl = wrapper.get("input");

    await inputEl.trigger("keydown.space");

    const prevented = (wrapper.emitted()["keydown"][0] as [KeyboardEvent])[0]
      .defaultPrevented;

    expect(prevented).toBeTruthy();
    expect(inputEl.element.value).toBe("1 234 567 890");
  });

  it("should change value to 0 on blur if input is empty", async () => {
    const inputEl = wrapper.get("input");

    await inputEl.setValue("");

    expect(inputEl.element.value).toBe("");

    await inputEl.trigger("blur");

    expect(inputEl.element.value).toBe("0");
  });
});
