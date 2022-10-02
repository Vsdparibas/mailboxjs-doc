---
displayed_sidebar: tutorialSidebar
---

# Watch mailboxes

:::info
To watch mailboxes, you must configure an IMAP host and port
:::

You can watch your mailboxes, simply with a little bit of configuration.

## Configure watching

To watch a mailbox, you need to tell to MailboxJS what mailbox to watch.

This is done in the configuration of MailboxJS.

Here is an exemple of a configuration with watching :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js title="/imap-config.js"
const config = {
    user: 'username@server.domain',
    pass: 'password',
    imap: {
        host: 'imap.server.domain',
        port: 993,
    },
    smtp: {
        host: 'smtp.server.domain',
        port: 994,
    }
    logger: false,
    logging: true,
    mailboxesToWatch: ['INBOX'],
    mailboxesToWatchInterval: 1000 * 60,
}

export config;
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js title="/imap-config.js"
const config = {
    user: 'username@server.domain',
    pass: 'password',
    imap: {
        host: 'imap.server.domain',
        port: 993,
    },
    smtp: {
        host: 'smtp.server.domain',
        port: 994,
    }
    logger: false,
    logging: true,
    mailboxesToWatch: ['INBOX'],
    mailboxesToWatchInterval: 1000 * 60,
}

module.exports = { config };
```

  </TabItem>
</Tabs>

`mailboxesToWatch` contains an array of all the mailboxes name's to watch (case sensistive).

`mailboxesToWatchInterval` is the checking new mails interval in ms.

## New mails listener

Now that you have configured watching, you can use event listeners of `MailboxJs` object.

There is an exemple of listening `INBOX` new mails :

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js
import { MailboxJs } from 'mailboxjs';
import { config } from './mbjs-config'; // MailboxJsConfig

function onNewMail(mail) {
  // On a new mail -> Logs the mail's subject
  console.log(`I've received a mail ! (${mail.subject})`);
}

const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

mbjs.on('mail', onNewMail); // Link onNewMail function to mail event listener
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js
const { MailboxJs } = require('mailboxjs');
const { config } = require('./mbjs-config'); // MailboxJsConfig

function onNewMail(mail) {
  // On a new mail -> Logs the mail's subject
  console.log(`I've received a mail ! (${mail.subject})`);
}

async function runAsync() {
  const mbjs = await new MailboxJs(config).run(); // Connects to IMAP and SMTP server

  mbjs.on('mail', onNewMail); // Link onNewMail function to mail event listener
}

runAsync();
```

  </TabItem>
</Tabs>

Every time that a new mail is detected, `onNewMail` function will be triggered.
