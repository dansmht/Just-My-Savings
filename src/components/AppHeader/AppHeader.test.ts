import { shallowMount, VueWrapper } from "@vue/test-utils";

import AppHeader from "@/components/AppHeader/AppHeader.vue";

describe("AppHeader Component", () => {
  let wrapper: VueWrapper<InstanceType<typeof AppHeader>>;

  beforeEach(async () => {
    wrapper = shallowMount(AppHeader);
  });

  it("should mount", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have header tag", () => {
    expect(wrapper.find("header").exists()).toBeTruthy();
  });
});
