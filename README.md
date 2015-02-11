# Github-Notify

Chrome extension to follow the open issues on Github's repositoriers that you want.

## How to use

### Step 1 - Clone repository

```
git clone git@github.com:maxigimenez/github-notify.git
```


### Step 2 - Install dependencies

```
bower install
```

### Step 3 - Load extension in chrome

To load the unpacked extension please follow [this instructions](https://developer.chrome.com/extensions/getstarted#unpacked) is real simple and quick.

### Step 4 - Generate a github token

Once the chrome extension is installed, to use it and get the content from Github is necessary have a access token, please go [here](https://help.github.com/articles/creating-an-access-token-for-command-line-use/#creating-a-token) and follow the steps to create a token, be sure to check the scope for `Access private repository` without this permiss the chrome won't work.

### Step 5 - Complete the form

Besides the access token of Github is necessary set the account name where are the repositories, plus the list of the repos that we want to `watch` separated by comma.

**That's it!** after complete all the form and click in save, you should start see the open issues of each repository.

## Changelog

### 2015-02-11

- Support only one account
- Saving information in localStorage
- unpacked chrome extension