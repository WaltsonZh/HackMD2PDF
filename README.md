# HackMD To PDF

## Table of Content

- [HackMD To PDF](#HackMD-To-PDF)
  - [Table of Content](#Table-of-Content)
  - [How to Use](#How-to-Use)
    - [1. Brower Setup](#1-Browser-Setup)
    - [2. Environment Setup](#2-Environment-Setup)
    - [3. Start Local Server](#3-Start-Local-Server)
    - [4. Enter HackMD ID](#4-Enter-HackMD-ID)

---

## How to Use

### 1. Browser Setup

> Chrome Recommended!

Download a markdown viewer plugin for your browser.

Chrome: [MD Reader](https://chromewebstore.google.com/detail/md-reader/medapdbncneneejhbgcjceippjlfkmkg) (Recommended)

Firefox: [Markdown Viewer](https://addons.mozilla.org/firefox/addon/markdown-viewer-chrome/) (Recommended)

### 2. Environment Setup

Download or upgrade [Node.js](https://nodejs.org) to **v20.11.0**, npm and npx to **v10.1.0**.

Download the code.

Create a copy of `.env.sample` and name it as `.env`.

![env](https://hackmd.io/_uploads/SJXJCpfFa.png)

Create your [HackMD API Key](https://hackmd.io/settings#api).

Copy your key to `.env` file.

![HackMDAPI](https://hackmd.io/_uploads/rkCeyAzY6.png)

### 3. Start Local Server

Run the commands bellow to start the server.

```
npm install
npm run dev
```

Which the result should look something like this : 

![result](https://hackmd.io/_uploads/rkCffI9YT.png)

Go to your localhost server (http://localhost:3000).

### 4. Enter HackMD ID

HackMD ID is the last section of the URL.

```
https://hackmd.io/9Fe7huR5QCG_jTG_baWVWw
```

In this case the ID is `9Fe7huR5QCG_jTG_baWVWw`

```
https://hackmd.io/@waltson/H1rSNYAd6
```

In this case the ID is `H1rSNYAd6`

Copy the ID and paste in the input section.

![submit](https://hackmd.io/_uploads/SkjFz85tp.png)

After hitting the submit button, the result will be shown in a new tab, the markdown viewer plugin should styled markdown content instead of showing raw text, press `ctrl + p` to print the page, choose **Save as PDF**.
