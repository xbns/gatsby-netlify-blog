---
title: How to stop git from prompting for username and password.
date: 2020-05-13
tags: [git]
path: blog/stop-git-from-asking-username-password
cover: ./preview.jpg
excerpt: Stop git from asking username and password everytime.
published: true
---

## Problem
You cloned your repository using `http` from Github but everytime you do a pull/push request,there goes
the prompt asking for your username and password.This is quite annoying and you don't want to be keying
in these details every now and then.

### Solution
### Step 1: Generate your SSH Keys in your local machine.
We will use this key with our Github account.The process is similar in Bitbucket.

Press `Ctrl + Alt + T` to open your terminal.Am assuming your are using linux.
Type `cd ~/.ssh` to navigate to the hidden `.ssh` folder.Type `ls` to check what is therein.
In my case,I can see a folder `known_hosts`.

Type this command
```bash
$ ssh-keygen -t -C "<your github email here>"
```
Substitute the text with your email including `<...>`to something like

`ssh-keygen -t -C "myemail@gmail.com"`

If you are prompted for a file to save your key,you may enter something like `github-key`
Otherwise you can press enter,it will create a default one for you.

If still prompted for a passphrase you can still press enter to skip.
You don't want to put something you cannot recall in the future.
Press enter to skip the passphrase again.

It is important to note that passphrase is important if your password is compromised.You can still use a passphare to
increase security for your keys.

Now if you will see a message that you "Your identifications has been .....".
with also the key fingerprint.

Type `ls` to confirm there are two more addition files in your folder

You are interested in this file `github-key.pub` or if you pressed enter to skip then your file should be
something like `id_rsa.pub`.

To open this file,for instance using GEdit,type this command.

```bash
$ sudo gedit github-key.pub
```
Once this file opens up, Select All the text there and Copy.

### Step 2: Paste your key in Step 1 to Github

Go to you github ` Personal Settings > SSH and GPG Keys`.

Select `New SSH key`.

Give a **title** to your key.Mine is usually the laptop name.i.e Hp-ProBook-4540s

Paste the Key on the **key** box.

Press `Add SSH key`

Note:keys are usually under this URL in Github `https://github.com/settings/keys`

### Step 3: Troubleshooting

Now if you try to push/pull one of your repos.
```bash
$ git push origin master
```
or `git <remote-name> <branch>` .You may get this error.

> Permission denied (publickey).fatal Could not read from remote repository.Please make sure you have the correct access rights and the repository exists

or an equivalent error.

The reason is that you repository is still using `HTTPS`.You need to change it to `SSH.`
To do that type the following command

```bash
$ git remote set-url origin git@github.com:<your-username>/<your-repository>
```
Actually you should repeat the above command for all your repos that you cloned using `HTTP`.

### Step 4: Conclusion
Moving forward you should start cloning your repos using `SSH`.

If you have another workstation,you can follow the same process.

If you try to push again,you should be OK.
```bash
 $ git push origin master
```