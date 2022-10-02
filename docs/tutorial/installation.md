---
displayed_sidebar: tutorialSidebar
---

# Installation

To use MailboxJS, you need to install the library :

```bash npm2yarn
npm install mailboxjs
```

To import MailboxJS in your project :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="ESM" default>

```js
import { MailboxJS } from 'mailboxjs';
```

  </TabItem>
  <TabItem value="orange" label="CJS">

```js
const { MailboxJS } = require('mailboxjs');
```

  </TabItem>
</Tabs>

In the next part, we will see how to configure the mailbox.
