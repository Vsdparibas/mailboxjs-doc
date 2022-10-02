/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'tutorial/installation',
        'tutorial/configuration',
        'tutorial/send-mails',
        'tutorial/get-mailboxes-names',
        'tutorial/use-a-mailbox',
        'tutorial/watch-mailboxes',
      ],
    },
  ],
  documentationSidebar: [
    {
      type: 'category',
      label: 'Documentation',
      items: [
        'documentation/intro',
        'documentation/mail',
        'documentation/mailbox',
        'documentation/mailbox-js',
      ],
    },
  ],
};
