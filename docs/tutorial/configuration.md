---
displayed_sidebar: tutorialSidebar
---

# Configuration

To configure MailboxJS, you need to create a `MailboxJSConfig` object in a file or a variable.

To use all the functions of MailboxJS, you need to connect your mail account through imap and smtp.

SMTP is used to send mails, all other functions are from IMAP protocol.

This is a configuration example, named here `mbjs-config.js`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="esm" label="ESM" default>

```js title="/mbjs-config.js"
const config = {
    name: 'My Name',
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
}

export config;
```

  </TabItem>
  <TabItem value="cjs" label="CJS">

```js title="/mbjs-config.js"
const config = {
    name: 'My Name',
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
}

module.exports = { config };
```

  </TabItem>
</Tabs>

For more options, check the MailboxJsConfig documentation.

Parameter `name` is needed and used to fill your name for sending mails.

Parameters `user` and `pass` are needed.

You can, if you want, only use `imap` or `smtp` but both are needed to fully use a mailbox.

The `logger` parameter set to false disable logging from imapflow, which MailboxJS is based on (verbose logging).

The `logging` parameter set to true enable MailboxJS logging.

:::info
For typescript, you can import `MailboxJsConfig` interface with :

```js
import { MailboxJsConfig } from 'mailboxjs';
```

:::

You can finally use MailboxJS. We will see how in the next step.
