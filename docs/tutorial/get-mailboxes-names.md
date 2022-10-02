---
displayed_sidebar: tutorialSidebar
---

# Get mailboxes name's

:::info
To get mailboxes name's, you need to configure an IMAP host and port
:::

In order to deal with mails and mailboxes, you need to get mailboxes names (path).

If you know them (like `INBOX`, `Sent`, `Trash`, ...), you don't need to get mailboxes and can skip this step.

## Getting mailboxes

You can get mailboxes simply with this code :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server
const mailboxes = mbjs.getMailboxes();

console.log(mailboxes); // Log a map of Mailbox objects
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server
  const mailboxes = mbjs.getMailboxes();

  console.log(mailboxes); // Log a map of Mailbox objects
}

runAsync();
```

  </TabItem>
</Tabs>

Variable `mailboxes` contains `Mailbox` objects, where you can use `Mailbox.path` to get a mailbox name (path).

:::danger
Always wait for `await mbjs.run()` before any operation on MailboxJs object.
:::

Now that you have the name of your mailboxes, you can get mails from them.

We will see that in the next step.
