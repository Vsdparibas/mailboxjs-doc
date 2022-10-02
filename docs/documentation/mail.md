---
displayed_sidebar: documentationSidebar
---

# Mail

<a name="mail"></a>

The mail object implements [ParsedMail](https://nodemailer.com/extras/mailparser/#mail-object) from mailparser.

You only deal with this object when you are receiving mails from IMAP server (not for sending mails).

## Properties

| Name    | Type    | Description                                                                               |
| ------- | ------- | ----------------------------------------------------------------------------------------- |
| uid     | number  | Unique id of the mail                                                                     |
| seq     | number  | Sequence number of the mail                                                               |
| mailbox | Mailbox | Mailbox object of where the mail is                                                       |
| ...     | ...     | All the properties of [ParsedMail](https://nodemailer.com/extras/mailparser/#mail-object) |

## Methods

- [Mail](#mail)
  - [.delete()](#maildelete)
  - [.move(toMailboxPath)](#mailmovetomailboxpath)
  - [.copy(toMailboxPath)](#mailcopytomailboxpath)
  - [.addFlags(flags)](#mailaddflagsflags)
  - [.removeFlags(flags)](#mailremoveflagsflags)
  - [.see()](#mailsee)
  - [.unsee()](#mailunsee)

<a name="mail+delete"></a>

### mail.delete()

Delete this mail

<a name="mail+move"></a>

### mail.move(toMailboxPath)

Move this mail to another mailbox.

| Parameter     | Type   | Description                                  |
| ------------- | ------ | -------------------------------------------- |
| toMailboxPath | string | Mailbox's name (path) where to move the mail |

<a name="mail+copy"></a>

### mail.copy(toMailboxPath)

Copy this mail to another mailbox.

| Parameter     | Type   | Description                                  |
| ------------- | ------ | -------------------------------------------- |
| toMailboxPath | string | Mailbox's name (path) where to copy the mail |

<a name="mail+addFlags"></a>

### mail.addFlags(flags)

Add flags to this mail.

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| flags     | string[] | Flag's names to add |

<a name="mail+removeFlags"></a>

### mail.removeFlags(flags)

Remove flags from this mail.

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| flags     | string[] | Flag's names to remove |

<a name="mail+see"></a>

### mail.see()

Mark this mail as seen.

<a name="mail+unsee"></a>

### mail.unsee()

Mark this mail as unseen.
