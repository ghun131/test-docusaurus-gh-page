/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  authApiSidebar: [
    {
      type: "category",
      label: "Authorization consumption activity",
      link: {
        type: "generated-index",
        title: "Authorized consumption activity API",
        description:
          "Authorized consumption activity is the most important API for a publisher site",
        slug: "/category/authorization-consumption-activity-api",
      },
      items: require("./docs/api-references/sidebar.js"),
    },
  ],
};

export default sidebars;
