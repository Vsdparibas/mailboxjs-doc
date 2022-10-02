---
displayed_sidebar: documentationSidebar
---

# Mailbox

<a name="mailbox"></a>

## Properties

| Name    | Type   | Description                          |
| ------- | ------ | ------------------------------------ |
| path    | string | Name of the mailbox                  |
| nextUid | number | Next uid prediction for this mailbox |

## Methods

- [Mailbox](#mailbox)
  - [.delete()](#mailboxdelete)
  - [.rename(newMailboxPath)](#mailboxrenamenewmailboxpath)

### mailbox.delete()

Delete this mailbox and mails inside of it.

### mailbox.rename(newMailboxPath)

Change the name of the mailbox.

| Parameter      | Type   | Description        |
| -------------- | ------ | ------------------ |
| newMailboxPath | string | New mailbox's name |
