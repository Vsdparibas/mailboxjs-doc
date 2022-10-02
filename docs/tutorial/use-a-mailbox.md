---
displayed_sidebar: tutorialSidebar
---

# Use a mailbox

:::info
To use mailboxes, you need to configure an IMAP host and port
:::

With MailboxJS, you can use all your mailboxes.

You can get, delete, see and unsee mails.

## Get mails

There is a code example to get mails from mailbox `INBOX` :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

const mailboxPath = 'INBOX'; // Mailbox path (name)
const mails = await mbjs.getMails(mailboxPath); // Get all mails from a mailbox

console.log(mails); // Log an array of ImapMail objects
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  const mailboxPath = 'INBOX'; // Mailbox path (name)
  const mails = await mbjs.getMails(mailboxPath); // Get all mails from a mailbox

  console.log(mails); // Log an array of ImapMail objects
}

runAsync();
```

  </TabItem>
</Tabs>

## Delete mails

There is a code example to delete mails from mailbox `INBOX` :

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

const mailboxPath = 'INBOX'; // Mailbox path (name)
const mails = await mbjs.getMails(mailboxPath); // Get all mails from a mailbox

await mbjs.deleteMails(mailboxPath, { mails }); // Delete mails sended
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  const mailboxPath = 'INBOX'; // Mailbox path (name)
  const mails = await mbjs.getMails(mailboxPath); // Get all mails from a mailbox

  await mbjs.deleteMails(mailboxPath, { mails }); // Delete mails sended
}

runAsync();
```

  </TabItem>
</Tabs>

This is another example to delete mails :

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

const mailboxPath = 'INBOX'; // Mailbox path (name)
const mails = await mbjs.getMails(mailboxPath); // Get all mails from a mailbox

for (const mail of mails) {
  await mail.delete();
}
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  const mailboxPath = 'INBOX'; // Mailbox path (name)
  const mails = await mbjs.getMails(mailboxPath); // Get all mails from a mailbox

  for (const mail of mails) {
    await mail.delete();
  }
}

runAsync();
```

  </TabItem>
</Tabs>

Now that you can manage a mailbox, we can continue to watching mailboxes in the next step.
