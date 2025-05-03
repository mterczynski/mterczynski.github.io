# mterczynski.github.io

## About

This is the source of https://www.mter.pl.

Most of the code in this repository comes from other repositories from my GitHub page - possibly most of the builds should be placed in `/dist` or `/public` folder if Github Pages allows for such configuration.

## VerifyBuilds script

### Prerequisites

> Run `npm i` to install required depencencies for `verifyBuilds` script.

### About

`npm run verifyBuilds` enters each deployed project and verifies that each of them runs without errors or warnings. It also adds custom errors and warnings - for example warnings related to `meta` tag usage. 
