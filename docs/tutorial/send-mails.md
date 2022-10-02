---
displayed_sidebar: tutorialSidebar
---

# Send mails

:::info
To send mails, you need to configure a SMTP host and port
:::

Sending mails is the easiest part of MailboxJS.

## Sending mails

This is a code example for sending mails :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

mbjs.send('Name <tomail@mail.domain>', 'My subject here', 'My text here'); // Sends mail
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  mbjs.send('Name <tomail@mail.domain>', 'My subject here', 'My text here'); // Sends mail
}

runAsync();
```

  </TabItem>
</Tabs>

## Sending HTML mails

This is a code example for sending HTML mails :

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

mbjs.sendHtml(
  'Name <tomail@mail.domain>',
  'My subject here',
  'My alternative text here',
  'My <b>HTML</b> text<br />Here!',
); // Sends HTML mail
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  mbjs.sendHtml(
    'Name <tomail@mail.domain>',
    'My subject here',
    'My alternative text here',
    'My <b>HTML</b> text<br />Here!',
  ); // Sends HTML mail
}

runAsync();
```

  </TabItem>
</Tabs>

## Sending mails with attachments

Sending attachments is really easy.

There is an example :

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs, Attachment } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

const attachment = new Attachment('hello.txt', 'hello world');

mbjs.send(
  'Name <tomail@mail.domain>',
  'My subject here',
  'My text here',
  attachment,
); // Sends mail
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  const attachment = new Attachment('hello.txt', 'hello world');

  mbjs.send(
    'Name <tomail@mail.domain>',
    'My subject here',
    'My text here',
    attachment,
  ); // Sends mail
}

runAsync();
```

  </TabItem>
</Tabs>

We will see that in the next step.
