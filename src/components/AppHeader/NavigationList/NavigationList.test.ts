import { mount, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

import NavigationList from "./NavigationList.vue";

import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("NavigationList Component", () => {
  let wrapper: VueWrapper<InstanceType<typeof NavigationList>>;

  beforeEach(async () => {
    wrapper = mount(NavigationList, {
      global: {
        plugins: [router],
      },
    });
  });

  it("should mount", async () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have 3 navigation links", async () => {
    const links = wrapper.findAll("a");

    expect(links.length).toBe(3);
  });

  it("should have links with icons", async () => {
    const icons = wrapper.findAll("a svg");

    expect(icons.length).toBe(3);
  });

  it("should contain text on each link", async () => {
    const links = wrapper.findAll("a");

    expect(links[0].text()).toBe("My Goals");
    expect(links[1].text()).toBe("My Cards");
    expect(links[2].text()).toBe("Settings");
  });
});
