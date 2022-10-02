---
displayed_sidebar: documentationSidebar
---

# MailboxJs

<a name="mailboxjs"></a>

## MailboxJs

MailboxJS
Used to interact with a mailbox by IMAP or/and SMTP

**Kind**: global class

- [MailboxJs](#MailboxJs)
  - [new MailboxJs(config)](#new_MailboxJs_new)
  - [.run()](#MailboxJs+run) ⇒ [<code>MailboxJs</code>](#MailboxJs)
  - [.on(event, callback)](#MailboxJs+on)
  - [.send(to, subject, text, attachments, from)](#MailboxJs+send)
  - [.sendHtml(to, subject, text, html, attachments, from)](#MailboxJs+sendHtml)
  - [.getMailboxes()](#MailboxJs+getMailboxes) ⇒ <code>Map.&lt;string, Mailbox&gt;</code>
  - [.createMailbox(mailboxPath)](#MailboxJs+createMailbox) ⇒ <code>Promise.&lt;(MailboxCreateResponse\|undefined)&gt;</code>
  - [.deleteMailbox(mailboxPath)](#MailboxJs+deleteMailbox) ⇒ <code>Promise.&lt;(MailboxDeleteResponse\|undefined)&gt;</code>
  - [.renameMailbox(mailboxPath, newMailboxPath)](#MailboxJs+renameMailbox) ⇒ <code>Promise.&lt;(MailboxRenameResponse\|undefined)&gt;</code>
  - [.copyMails(mailboxPath, toMailboxPath, toCopy)](#MailboxJs+copyMails) ⇒ <code>Promise.&lt;(CopyResponseObject\|undefined)&gt;</code>
  - [.moveMails(mailboxPath, toMailboxPath, toMove)](#MailboxJs+moveMails) ⇒ <code>Promise.&lt;(CopyResponseObject\|undefined)&gt;</code>
  - [.deleteMails(mailboxPath, toDelete)](#MailboxJs+deleteMails) ⇒ <code>Promise.&lt;(boolean\|undefined)&gt;</code>
  - [.addMailsFlags(mailboxPath, flags, toAdd)](#MailboxJs+addMailsFlags) ⇒ <code>Promise.&lt;(boolean\|undefined)&gt;</code>
  - [.removeMailsFlags(mailboxPath, flags, toRemove)](#MailboxJs+removeMailsFlags) ⇒ <code>Promise.&lt;(boolean\|undefined)&gt;</code>
  - [.getMail(mailboxPath, uid)](#MailboxJs+getMail) ⇒ <code>Promise.&lt;(Mail\|undefined)&gt;</code>
  - [.getMails(mailboxPath, toFetch)](#MailboxJs+getMails) ⇒ <code>Promise.&lt;(Array.&lt;Mail&gt;\|undefined)&gt;</code>
  - [.getUnseenMails(mailboxPath)](#MailboxJs+getUnseenMails) ⇒ <code>Promise.&lt;(Array.&lt;Mail&gt;\|undefined)&gt;</code>
  - [.getSeenMails(mailboxPath)](#MailboxJs+getSeenMails) ⇒ <code>Promise.&lt;(Array.&lt;Mail&gt;\|undefined)&gt;</code>

<a name="new_MailboxJs_new"></a>

### new MailboxJs(config)

Contructor of MailboxJS

| Param  | Type                         | Description                |
| ------ | ---------------------------- | -------------------------- |
| config | <code>MailboxJsConfig</code> | Configuration of MailboxJS |

<a name="MailboxJs+run"></a>

### mailboxJs.run() ⇒ [<code>MailboxJs</code>](#MailboxJs)

Run MailboxJS
You should await for this method before any actions on MailboxJS object

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)  
<a name="MailboxJs+on"></a>

### mailboxJs.on(event, callback)

Event listener for MailboxJS

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param    | Type                                                             | Description                                                                                           |
| -------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| event    | <code>&#x27;mail&#x27;</code> \| <code>&#x27;delete&#x27;</code> | Event you want to listen to                                                                           |
| callback | <code>function</code>                                            | Function to call when event triggered (give you an email for 'mail' event and uid for 'delete' event) |

<a name="MailboxJs+send"></a>

### mailboxJs.send(to, subject, text, attachments, from)

Send a mail

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                                  | Description              |
| ----------- | ------------------------------------- | ------------------------ |
| to          | <code>string</code>                   | Receiver identity        |
| subject     | <code>string</code>                   | Subject of the mail      |
| text        | <code>string</code>                   | Content text of the mail |
| attachments | <code>Array.&lt;Attachment&gt;</code> | Mail attachments         |
| from        | <code>string</code>                   | Sender identity          |

<a name="MailboxJs+sendHtml"></a>

### mailboxJs.sendHtml(to, subject, text, html, attachments, from)

Send a html mail

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                                                             | Description              |
| ----------- | ---------------------------------------------------------------- | ------------------------ |
| to          | <code>string</code>                                              | Receiver identity        |
| subject     | <code>string</code>                                              | Subject of the mail      |
| text        | <code>string</code>                                              | Content text of the mail |
| html        | <code>string</code>                                              | Content html of the mail |
| attachments | <code>Array.&lt;Attachment&gt;</code> \| <code>Attachment</code> | Mail attachments         |
| from        | <code>string</code>                                              | Sender identity          |

<a name="MailboxJs+getMailboxes"></a>

### mailboxJs.getMailboxes() ⇒ <code>Map.&lt;string, Mailbox&gt;</code>

Get mailboxes map

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)  
**Returns**: <code>Map.&lt;string, Mailbox&gt;</code> - - A map of Mailbox objects  
<a name="MailboxJs+createMailbox"></a>

### mailboxJs.createMailbox(mailboxPath) ⇒ <code>Promise.&lt;(MailboxCreateResponse\|undefined)&gt;</code>

Create a mailbox

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                | Description              |
| ----------- | ------------------- | ------------------------ |
| mailboxPath | <code>string</code> | Mailbox's name to create |

<a name="MailboxJs+deleteMailbox"></a>

### mailboxJs.deleteMailbox(mailboxPath) ⇒ <code>Promise.&lt;(MailboxDeleteResponse\|undefined)&gt;</code>

Delete a mailbox

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                | Description              |
| ----------- | ------------------- | ------------------------ |
| mailboxPath | <code>string</code> | Mailbox's name to delete |

<a name="MailboxJs+renameMailbox"></a>

### mailboxJs.renameMailbox(mailboxPath, newMailboxPath) ⇒ <code>Promise.&lt;(MailboxRenameResponse\|undefined)&gt;</code>

Rename a mailbox

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param          | Type                | Description              |
| -------------- | ------------------- | ------------------------ |
| mailboxPath    | <code>string</code> | Mailbox's name to rename |
| newMailboxPath | <code>string</code> | New mailbox's name       |

<a name="MailboxJs+copyMails"></a>

### mailboxJs.copyMails(mailboxPath, toMailboxPath, toCopy) ⇒ <code>Promise.&lt;(CopyResponseObject\|undefined)&gt;</code>

Copy one or multiple mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param         | Type                  | Description           |
| ------------- | --------------------- | --------------------- |
| mailboxPath   | <code>string</code>   | Mailbox's name        |
| toMailboxPath | <code>string</code>   | To mailbox's name     |
| toCopy        | <code>UidsList</code> | List of mails to copy |

<a name="MailboxJs+moveMails"></a>

### mailboxJs.moveMails(mailboxPath, toMailboxPath, toMove) ⇒ <code>Promise.&lt;(CopyResponseObject\|undefined)&gt;</code>

Move one or multiple mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param         | Type                  | Description           |
| ------------- | --------------------- | --------------------- |
| mailboxPath   | <code>string</code>   | Mailbox's name from   |
| toMailboxPath | <code>string</code>   | Mailbox's name to     |
| toMove        | <code>UidsList</code> | List of mails to move |

<a name="MailboxJs+deleteMails"></a>

### mailboxJs.deleteMails(mailboxPath, toDelete) ⇒ <code>Promise.&lt;(boolean\|undefined)&gt;</code>

Delete one or multiple mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                  | Description             |
| ----------- | --------------------- | ----------------------- |
| mailboxPath | <code>string</code>   | Mailbox's name          |
| toDelete    | <code>UidsList</code> | List of mails to delete |

<a name="MailboxJs+addMailsFlags"></a>

### mailboxJs.addMailsFlags(mailboxPath, flags, toAdd) ⇒ <code>Promise.&lt;(boolean\|undefined)&gt;</code>

Add flags to one or multiple mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                              | Description                |
| ----------- | --------------------------------- | -------------------------- |
| mailboxPath | <code>string</code>               | Mailbox's name             |
| flags       | <code>Array.&lt;string&gt;</code> | Array of flags             |
| toAdd       | <code>UidsList</code>             | List of mails to add flags |

<a name="MailboxJs+removeMailsFlags"></a>

### mailboxJs.removeMailsFlags(mailboxPath, flags, toRemove) ⇒ <code>Promise.&lt;(boolean\|undefined)&gt;</code>

Remove flags to one or multiple mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                              | Description                   |
| ----------- | --------------------------------- | ----------------------------- |
| mailboxPath | <code>string</code>               | Mailbox's name                |
| flags       | <code>Array.&lt;string&gt;</code> | Array of flags                |
| toRemove    | <code>UidsList</code>             | List of mails to remove flags |

<a name="MailboxJs+getMail"></a>

### mailboxJs.getMail(mailboxPath, uid) ⇒ <code>Promise.&lt;(Mail\|undefined)&gt;</code>

Get a mail from uid

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                | Description        |
| ----------- | ------------------- | ------------------ |
| mailboxPath | <code>string</code> | Mailbox's name     |
| uid         | <code>number</code> | Uid of mail to get |

<a name="MailboxJs+getMails"></a>

### mailboxJs.getMails(mailboxPath, toFetch) ⇒ <code>Promise.&lt;(Array.&lt;Mail&gt;\|undefined)&gt;</code>

Get multiple mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                  | Description                   |
| ----------- | --------------------- | ----------------------------- |
| mailboxPath | <code>string</code>   | Mailbox's name                |
| toFetch     | <code>UidsList</code> | List of mails's uids to fetch |

<a name="MailboxJs+getUnseenMails"></a>

### mailboxJs.getUnseenMails(mailboxPath) ⇒ <code>Promise.&lt;(Array.&lt;Mail&gt;\|undefined)&gt;</code>

Get unseen mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| mailboxPath | <code>string</code> | Mailbox's name |

<a name="MailboxJs+getSeenMails"></a>

### mailboxJs.getSeenMails(mailboxPath) ⇒ <code>Promise.&lt;(Array.&lt;Mail&gt;\|undefined)&gt;</code>

Get seen mails

**Kind**: instance method of [<code>MailboxJs</code>](#MailboxJs)

| Param       | Type                | Description    |
| ----------- | ------------------- | -------------- |
| mailboxPath | <code>string</code> | Mailbox's name |
