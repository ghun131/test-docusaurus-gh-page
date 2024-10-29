import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-references/getlago-api",
    },
    {
      type: "category",
      label: "Authorization entitlement",
      items: [
        {
          type: "doc",
          id: "api-references/authorize-entitlement",
          label: "Authorize user action",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
