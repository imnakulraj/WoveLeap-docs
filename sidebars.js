/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/logging-in',
        'getting-started/sso',
        'getting-started/navigation',
        'getting-started/roles',
      ],
    },
    {
      type: 'category',
      label: 'For Partners',
      items: [
        'partners/overview',
        'partners/submitting-a-sale',
        'partners/tracking-commissions',
        'partners/payout-statements',
        'partners/bank-details',
      ],
    },
    {
      type: 'category',
      label: 'For Sales Persons',
      items: [
        'sales/overview',
        'sales/submitting-a-sale',
        'sales/tracking-commissions',
        'sales/payout-history',
      ],
    },
    {
      type: 'category',
      label: 'For Admins',
      items: [
        'admins/overview',
        'admins/inviting-users',
        'admins/managing-partners',
        'admins/contracts-and-tiers',
        'admins/approving-sales',
        'admins/managing-payouts',
        'admins/disputes',
        'admins/reports',
        'admins/org-setup',
        'admins/subscription',
      ],
    },
    'faq',
    'troubleshooting',
  ],
};

module.exports = sidebars;
