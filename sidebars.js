/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "index",
    "whats-new",
    "upgrade",
    {
      type: "category",
      link: {
        type: "doc",
        id: "getting-started/getting-started",
      },
      label: "Getting started",
      items: [
        "getting-started/rest-api-architecture",
        "getting-started/configure-clustered-environments",
        "getting-started/handle-rest-api-exceptions",
        "getting-started/microstrategy-rest-api-explorer",
        "getting-started/playground",
        "getting-started/embedding-sdk",
      ],
    },
    "rest-api-families",
    {
      type: "category",
      link: {
        type: "doc",
        id: "common-workflows/common-workflows",
      },
      label: "Common workflows",
      items: [
        "common-workflows/authentication",
        "common-workflows/folder-browsing",
        "common-workflows/search-for-objects",
        "common-workflows/sort-data",
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/filter-data/filter-data",
          },
          label: "Filter data",
          items: [
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances",
              },
              label: "Filter report and cube instances",
              items: [
                {
                  type: "category",
                  link: {
                    type: "doc",
                    id: "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/filter-report-and-cube-instances-using-view-filters",
                  },
                  label: "Filter report and cube instances using view filters",
                  items: [
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/general-guidelines",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-operators",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/supported-constant-data-types",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/code-sample",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/error-messages",
                  ],
                },
                {
                  type: "category",
                  link: {
                    type: "doc",
                    id: "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/filter-report-and-cube-instances-using-metric-limits",
                  },
                  label: "Filter report and cube instances using metric limits",
                  items: [
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/supported-operators",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/code-sample",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/error-messages",
                  ],
                },
                {
                  type: "category",
                  link: {
                    type: "doc",
                    id: "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/filter-report-and-cube-instances-using-requested-objects",
                  },
                  label: "Filter report and cube instances using requestedObjects",
                  items: [
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/general-guidelines",
                    "common-workflows/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/code-sample",
                  ],
                },
              ],
            },
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/filter-data/filter-dossier-instances/filter-dossier-instances",
              },
              label: "Filter dossier instances",
              items: ["common-workflows/filter-data/filter-dossier-instances/workflow-sample"],
            },
            "common-workflows/filter-data/retrieve-filters-applied-to-dossier-chapters",
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/retrieve-filters-applied-to-a-visualization",
              },
              label: "Retrieve filters applied to a visualization",
              items: [
                "common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters",
                "common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters",
                "common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria",
                "common-workflows/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria",
              ],
            },
          ],
        },
        "common-workflows/changesets",
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-cube-objects/manage-cube-objects",
          },
          label: "Manage cube objects",
          items: [
            "common-workflows/manage-cube-objects/retrieve-a-cube-definition",
            "common-workflows/manage-cube-objects/create-a-cube-object",
            "common-workflows/manage-cube-objects/update-a-cube-definition",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-fact-objects/manage-fact-objects",
          },
          label: "Manage fact objects",
          items: [
            "common-workflows/manage-fact-objects/retrieve-a-facts-definition",
            "common-workflows/manage-fact-objects/retrieve-a-facts-definition-within-a-changeset",
            "common-workflows/manage-fact-objects/create-a-fact-object",
            "common-workflows/manage-fact-objects/update-a-fact-object",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-fences/manage-fences",
          },
          label: "Manage fences",
          items: [
            "common-workflows/manage-fences/retrieve-list-of-fences",
            "common-workflows/manage-fences/retrieve-specific-fence",
            "common-workflows/manage-fences/create-fence",
            "common-workflows/manage-fences/update-specific-fence",
            "common-workflows/manage-fences/delete-specific-fence",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-filter-objects/manage-filter-objects",
          },
          label: "Manage filter objects",
          items: [
            "common-workflows/manage-filter-objects/retrieve-a-filters-definition",
            "common-workflows/manage-filter-objects/retrieve-a-filters-definition-within-a-changeset",
            "common-workflows/manage-filter-objects/create-a-filter-object",
            "common-workflows/manage-filter-objects/create-a-filter-object-with-a-custom-expression",
            "common-workflows/manage-filter-objects/update-a-filters-definition",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-attribute-objects/manage-attribute-objects",
          },
          label: "Manage attribute objects",
          items: [
            "common-workflows/manage-attribute-objects/retrieve-an-attributes-definition",
            "common-workflows/manage-attribute-objects/retrieve-an-attributes-definition-within-a-changeset",
            "common-workflows/manage-attribute-objects/create-an-attribute-object",
            "common-workflows/manage-attribute-objects/update-an-attributes-definition",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-attribute-relationships/manage-attribute-relationships",
          },
          label: "Manage attribute relationships",
          items: [
            "common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships",
            "common-workflows/manage-attribute-relationships/retrieve-an-attributes-relationships-within-a-changeset",
            "common-workflows/manage-attribute-relationships/update-an-attributes-relationships",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-transformation-objects/manage-transformation-objects",
          },
          label: "Manage transformation objects",
          items: [
            "common-workflows/manage-transformation-objects/retrieve-a-transformations-definition",
            "common-workflows/manage-transformation-objects/create-a-transformation-object",
            "common-workflows/manage-transformation-objects/update-a-transformations-definition",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-metric-objects/manage-metric-objects",
          },
          label: "Manage metric objects",
          items: [
            "common-workflows/manage-metric-objects/retrieve-a-metrics-definition",
            "common-workflows/manage-metric-objects/retrieve-a-metrics-definition-within-a-changeset",
            "common-workflows/manage-metric-objects/create-a-metric-within-a-changeset",
            "common-workflows/manage-metric-objects/update-a-metrics-definition-within-a-changeset",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-object-translations/manage-object-translations",
          },
          label: "Manage object's translations",
          items: [
            "common-workflows/manage-object-translations/retrieve-object-translations",
            "common-workflows/manage-object-translations/remove-add-object-translations",
            "common-workflows/manage-object-translations/update-object-translations",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-base-formula-objects/manage-base-formula-objects",
          },
          label: "Manage base formula objects",
          items: [
            "common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition",
            "common-workflows/manage-base-formula-objects/retrieve-a-base-formulas-definition-within-a-changeset",
            "common-workflows/manage-base-formula-objects/create-a-base-formulas-definition-within-a-changeset",
            "common-workflows/manage-base-formula-objects/update-a-base-formulas-definition-within-a-changeset",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-subtotal-objects/manage-subtotal-objects",
          },
          label: "Manage subtotal objects",
          items: [
            "common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition",
            "common-workflows/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",
            "common-workflows/manage-subtotal-objects/create-a-subtotal-within-a-changeset",
            "common-workflows/manage-subtotal-objects/update-a-subtotal-within-a-changeset",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-selectors/manage-selectors",
          },
          label: "Manage selectors",
          items: [
            "common-workflows/manage-selectors/retrieve-a-selectors-definition",
            "common-workflows/manage-selectors/set-selector-type",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-drill-maps/manage-drill-maps",
          },
          label: "Manage drill maps",
          items: [
            "common-workflows/manage-drill-maps/retrieve-a-drill-map-definition",
            "common-workflows/manage-drill-maps/create-a-drill-map",
            "common-workflows/manage-drill-maps/update-a-drill-map",
            "common-workflows/manage-drill-maps/retrieve-a-list-of-objects",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-derived-element-objects/manage-derived-element-objects",
          },
          label: "Manage derived element objects",
          items: [
            "common-workflows/manage-derived-element-objects/retrieve-a-derived-elements-definition",
            "common-workflows/manage-derived-element-objects/create-a-derived-element",
            "common-workflows/manage-derived-element-objects/replace-an-existing-element",
            "common-workflows/manage-derived-element-objects/format-samples",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-consolidation-objects/manage-consolidation-objects",
          },
          label: "Manage consolidation objects",
          items: [
            "common-workflows/manage-consolidation-objects/retrieve-a-consolidations-definition",
            "common-workflows/manage-consolidation-objects/create-a-consolidation-object",
            "common-workflows/manage-consolidation-objects/update-a-consolidation-object",
          ],
        },
        "common-workflows/manage-languages",
        {
          type: "doc",
          id: "common-workflows/manage-caches",
          label: "Purge object and element caches",
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-prompt-objects/manage-prompt-objects",
          },
          label: "Manage prompt objects",
          items: [
            "common-workflows/manage-prompt-objects/retrieve-a-prompts-definition",
            "common-workflows/manage-prompt-objects/create-a-prompt-within-a-changeset",
            "common-workflows/manage-prompt-objects/update-a-prompts-definition-within-a-changeset",
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/manage-prompt-objects/prompt-types/prompt-types",
              },
              label: "Prompt types for managing prompt objects",
              items: [
                "common-workflows/manage-prompt-objects/prompt-types/attribute-element-prompts",
                "common-workflows/manage-prompt-objects/prompt-types/attribute-qualification-prompts",
                "common-workflows/manage-prompt-objects/prompt-types/hierarchy-qualification-prompts",
                "common-workflows/manage-prompt-objects/prompt-types/metric-expression-prompts",
                "common-workflows/manage-prompt-objects/prompt-types/object-prompts",
                "common-workflows/manage-prompt-objects/prompt-types/value-prompts",
              ],
            },
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/use-prompts-objects/use-prompts-objects",
          },
          label: "Use prompts objects",
          items: [
            "common-workflows/use-prompts-objects/answer-prompts",
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/use-prompts-objects/get-prompt-information/get-prompt-information",
              },
              label: "Get prompt information",
              items: [
                "common-workflows/use-prompts-objects/get-prompt-information/workflow-get-prompt-information",
              ],
            },
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/use-prompts-objects/prompt-types/prompt-types",
              },
              label: "Prompt types",
              items: [
                "common-workflows/use-prompts-objects/prompt-types/attribute-element-prompts",
                "common-workflows/use-prompts-objects/prompt-types/attribute-qualification-prompts",
                "common-workflows/use-prompts-objects/prompt-types/object-prompts",
                "common-workflows/use-prompts-objects/prompt-types/value-prompts",
                "common-workflows/use-prompts-objects/prompt-types/metric-expression-prompts",
                "common-workflows/use-prompts-objects/prompt-types/hierarchy-qualification-prompts",
                "common-workflows/use-prompts-objects/prompt-types/level-prompts",
              ],
            },
            "common-workflows/use-prompts-objects/prompt-execution-errors",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-runtime-objects/manage-runtimes",
          },
          label: "Manage runtimes",
          items: [
            "common-workflows/manage-runtime-objects/create-a-runtime",
            "common-workflows/manage-runtime-objects/update-a-runtime",
            "common-workflows/manage-runtime-objects/retrieve-a-runtime-definition",
            "common-workflows/manage-runtime-objects/delete-a-runtime",
            "common-workflows/manage-runtime-objects/retrieve-all-runtimes",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-incremental-refresh-report/manage-incremental-refresh-report",
          },
          label: "Manage incremental refresh report (IRRs)",
          items: [
            "common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition",
            "common-workflows/manage-incremental-refresh-report/create-an-irr",
            "common-workflows/manage-incremental-refresh-report/update-an-irr-definition",
            "common-workflows/manage-incremental-refresh-report/retrieve-an-irr-definition-with-advanced-properties",
            "common-workflows/manage-incremental-refresh-report/create-an-irr-with-advanced-properties",
            "common-workflows/manage-incremental-refresh-report/update-irr-advanced-properties",
            "common-workflows/manage-incremental-refresh-report/retrieve-applicable-properties-of-an-incremental-refresh-report",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-security-filter-objects/manage-security-filter-objects",
          },
          label: "Manage security filter objects",
          items: [
            "common-workflows/manage-security-filter-objects/retrieve-a-security-filter-definition",
            "common-workflows/manage-security-filter-objects/create-a-security-filter-object",
            "common-workflows/manage-security-filter-objects/update-a-security-filter-definition",
            "common-workflows/manage-security-filter-objects/create-a-security-filter-object-using-a-custom-expression",
            "common-workflows/manage-security-filter-objects/retrieve-a-security-filters-member",
            "common-workflows/manage-security-filter-objects/modify-a-security-filters-member",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-user-hierarchy-objects/manage-user-hierarchy-objects",
          },
          label: "Manage user hierarchy objects",
          items: [
            "common-workflows/manage-user-hierarchy-objects/retrieve-a-user-hierarchys-definition",
            "common-workflows/manage-user-hierarchy-objects/create-a-user-hierarchy",
            "common-workflows/manage-user-hierarchy-objects/update-a-user-hierarchys-definition",
            "common-workflows/manage-user-hierarchy-objects/retrieve-a-list-of-available-user-hierarchies",
            "common-workflows/manage-user-hierarchy-objects/user-hierarchy-import-parameters",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-calendar-objects/manage-calendar-objects",
          },
          label: "Manage calendar objects",
          items: [
            "common-workflows/manage-calendar-objects/retrieve-a-list-of-calendars-definitions",
            "common-workflows/manage-calendar-objects/retrieve-a-calendar-definition",
            "common-workflows/manage-calendar-objects/create-a-calendar-object",
            "common-workflows/manage-calendar-objects/update-a-calendar-object",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-custom-group-objects/manage-custom-group-objects",
          },
          label: "Manage custom group objects",
          items: [
            "common-workflows/manage-custom-group-objects/retrieve-a-custom-groups-definition",
            "common-workflows/manage-custom-group-objects/retrieve-a-custom-groups-definition-within-a-changeset",
            "common-workflows/manage-custom-group-objects/create-a-custom-group-object",
            "common-workflows/manage-custom-group-objects/create-a-custom-group-object-with-filter-elements-using-custom-expressions",
            "common-workflows/manage-custom-group-objects/update-a-custom-groups-definition",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-table-objects/manage-table-objects",
          },
          label: "Manage table objects",
          items: [
            "common-workflows/manage-table-objects/retrieve-a-list-of-all-available-table-definitions",
            "common-workflows/manage-table-objects/retrieve-a-tables-definition",
            "common-workflows/manage-table-objects/create-a-new-table-object",
            "common-workflows/manage-table-objects/update-a-tables-definition",
            "common-workflows/manage-table-objects/retrieve-a-prompt-of-an-sap-hana-table",
            "common-workflows/manage-table-objects/update-a-prompt-of-an-sap-hana-table",
            "common-workflows/manage-table-objects/update-sap-hana-parameters",
          ],
        },
        "common-workflows/manage-objects",
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/improve-performance-by-working-with-partial-resources/improve-performance-by-working-with-partial-resources",
          },
          label: "Improve performance by working with partial resources",
          items: [
            "common-workflows/improve-performance-by-working-with-partial-resources/field-selection-for-data-api-v2-result-fetching-endpoints",
          ],
        },
        "common-workflows/data-lineage-analysis-via-rest-apis",
        "common-workflows/manage-page-by-information",
        "common-workflows/export-to-pdf",
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-the-schema/manage-the-schema",
          },
          label: "Manage the schema",
          items: [
            "common-workflows/manage-the-schema/retrieve-the-schema-lock",
            "common-workflows/manage-the-schema/lock-the-schema",
            "common-workflows/manage-the-schema/unlock-the-schema",
            "common-workflows/manage-the-schema/reload-the-schema-synchronously",
            "common-workflows/manage-the-schema/reload-the-schema-asynchronously",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-user-and-user-groups/manage-user-and-user-groups",
          },
          label: "Manage users and user groups",
          items: [
            "common-workflows/manage-user-and-user-groups/create-and-update-user-groups",
            "common-workflows/manage-user-and-user-groups/create-new-users",
            "common-workflows/manage-user-and-user-groups/manage-users",
            "common-workflows/manage-user-and-user-groups/create-security-roles",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/make-external-data-available/make-external-data-available",
          },
          label: "Make external data available using the Push Data API",
          items: [
            "common-workflows/make-external-data-available/create-a-dataset-with-one-request/workflow-create-and-modify-a-dataset-with-one-request",
            {
              type: "category",
              link: {
                type: "doc",
                id: "common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/create-a-dataset-incrementally-with-multiple-requests",
              },
              label: "Create a dataset incrementally with multiple requests",
              items: [
                "common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits",
                "common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally",
                "common-workflows/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/workflow-create-a-dataset-incrementally-with-multiple-requests",
              ],
            },
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/retrieve-data-from-the-intelligence-server/retrieve-data-from-the-intelligence-server",
          },
          label: "Retrieve data from the Intelligence Server using the JSON Data API",
          items: [
            "common-workflows/retrieve-data-from-the-intelligence-server/workflow-retrieve-data-from-the-intelligence-server",
            "common-workflows/retrieve-data-from-the-intelligence-server/supported-features-and-considerations",
            "common-workflows/retrieve-data-from-the-intelligence-server/asynchronous-execution-of-reports-and-cubes",
          ],
        },
        "common-workflows/manage-an-intelligence-server-cluster",
        "common-workflows/project-administration",
        "common-workflows/manage-project-load-settings-on-server-startup",
        "common-workflows/manage-project-settings",
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/server-level-privileges/server-level-privileges",
          },
          label: "Server-level privileges",
          items: [
            "common-workflows/server-level-privileges/manage-server-level-privileges",
            "common-workflows/server-level-privileges/watch-kpi-insight-service-privileges",
          ],
        },
        "common-workflows/manage-server-settings",
        "common-workflows/monitor-and-manage-cube-caches",
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/retrieve-sql-statements-and-query-details/retrieve-sql-statements-and-query-details",
          },
          label: "Retrieve SQL statements and query details",
          items: [
            "common-workflows/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",
            "common-workflows/retrieve-sql-statements-and-query-details/retrieve-dataset-sql",
            "common-workflows/retrieve-sql-statements-and-query-details/retrieve-visualization-query-details",
            "common-workflows/retrieve-sql-statements-and-query-details/retrieve-grid-or-graph-query-details",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/create-and-import-migration-packages/create-and-import-migration-packages",
          },
          label: "Create and import migration packages",
          items: [
            "common-workflows/create-and-import-migration-packages/create-a-migration-package",
            "common-workflows/create-and-import-migration-packages/import-a-migration-package",
            "common-workflows/create-and-import-migration-packages/view-newly-created-package",
            "common-workflows/create-and-import-migration-packages/view-uploaded-package",
            "common-workflows/create-and-import-migration-packages/manage-content-group-packages",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/migrations-in-workstation/migrations-in-workstation",
          },
          label: "Migrations in Workstation",
          items: [
            "common-workflows/migrations-in-workstation/object-migration-between-environments",
            "common-workflows/migrations-in-workstation/project-merge-between-environments",
            "common-workflows/migrations-in-workstation/validate-migrations",
            "common-workflows/migrations-in-workstation/object-migration-groups-between-environments",
            "common-workflows/migrations-in-workstation/upload-and-download-migration-packages",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/datasource-management/datasource-management",
          },
          label: "Datasource management",
          items: [
            "common-workflows/datasource-management/create-a-datasource",
            "common-workflows/datasource-management/update-a-datasource",
            "common-workflows/datasource-management/add-and-remove-datasource-from-project",
            "common-workflows/datasource-management/update-job-priorities-for-datasource",
            "common-workflows/datasource-management/delete-a-datasource",
            "common-workflows/datasource-management/get-datasource-applicable-advanced-properties",
            "common-workflows/datasource-management/get-datasource-with-advanced-properties",
            "common-workflows/datasource-management/update-datasoure-advanced-property",
            "common-workflows/datasource-management/convert-connection-string-from-dsn-to-dsnless-for-a-datasource",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-subscriptions/manage-subscriptions",
          },
          label: "Manage subscriptions",
          items: [
            "common-workflows/manage-subscriptions/create-and-get-a-subscription",
            "common-workflows/manage-subscriptions/create-subscription-for-multi-content",
            "common-workflows/manage-subscriptions/create-subscription-with-prompted-content",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-datamart-objects/manage-datamart-objects",
          },
          label: "Manage datamart objects",
          items: [
            "common-workflows/manage-datamart-objects/create-a-datamart-from-a-source-report",
            "common-workflows/manage-datamart-objects/create-a-datamart-from-scratch",
            "common-workflows/manage-datamart-objects/retrieve-a-datamart-definition",
            "common-workflows/manage-datamart-objects/update-a-datamart-definition",
            "common-workflows/manage-datamart-objects/retrieve-applicable-properties-of-a-datamart",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-report-objects/manage-report-objects",
          },
          label: "Manage report objects",
          items: [
            "common-workflows/manage-report-objects/retrieve-a-reports-definition",
            "common-workflows/manage-report-objects/create-a-new-report",
            "common-workflows/manage-report-objects/update-the-definition-of-an-existing-report",
            "common-workflows/manage-report-objects/retrieve-a-derived-elements-definition-in-report",
            "common-workflows/manage-report-objects/create-a-derived-element-in-report",
            "common-workflows/manage-report-objects/delete-a-derived-element-in-report",
            "common-workflows/manage-report-objects/execute-report",
            "common-workflows/manage-report-objects/put-a-derived-element-in-report",
            "common-workflows/manage-report-objects/retrieve-applicable-properties-of-a-report",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-transaction-report-objects/manage-transaction-report-objects",
          },
          label: "Manage transaction report objects",
          items: [
            "common-workflows/manage-transaction-report-objects/create-a-transaction-report",
            "common-workflows/manage-transaction-report-objects/retrieve-transaction-report-definition",
            "common-workflows/manage-transaction-report-objects/update-transaction-report-definition",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-content-group-objects/manage-content-group-objects",
          },
          label: "Manage content group objects",
          items: [
            "common-workflows/manage-content-group-objects/retrieve-a-content-group",
            "common-workflows/manage-content-group-objects/retrieve-all-content-groups",
            "common-workflows/manage-content-group-objects/create-a-content-group",
            "common-workflows/manage-content-group-objects/update-a-content-group",
            "common-workflows/manage-content-group-objects/retrieve-contents-of-an-existing-content-group",
            "common-workflows/manage-content-group-objects/update-contents-of-an-existing-content-group",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/project-advanced-properties-management/project-advanced-properties-management",
          },
          label: "Manage project advanced properties",
          items: [
            "common-workflows/project-advanced-properties-management/get-project-applicable-advanced-properties",
            "common-workflows/project-advanced-properties-management/get-project-with-advanced-properties",
            "common-workflows/project-advanced-properties-management/update-project-advanced-property",
          ],
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "common-workflows/manage-application-objects/manage-application-objects",
          },
          label: "Manage application objects",
          items: [
            "common-workflows/manage-application-objects/manage-application-general-settings",
            "common-workflows/manage-application-objects/manage-application-customized-emails",
          ],
        },
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "microstrategy-rest-api-samples/microstrategy-rest-api-samples",
      },
      label: "MicroStrategy REST API samples",
      items: [
        "microstrategy-rest-api-samples/create-reports-on-the-fly",
        "microstrategy-rest-api-samples/react-user-manage-sample",
      ],
    },
  ],
};

// const sidebars = {
//   myAutogeneratedSidebar: [
//     {
//       type: "autogenerated",
//       dirName: ".", // '.' means the current docs folder
//     },
//   ],
// };

module.exports = sidebars;
