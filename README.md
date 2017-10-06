# github-quick-reply-chrome-extension
A vanilla javascript chrome extension that adds functionality to GitHub comments by easily replying to users and automatically quoting selected text. 

## How to Build
1. Clone
2. `cd github-quick-reply-chrome-extension && yarn`
3. `yarn build`

## You can use NPM as well
1. Clone
2. `cd github-quick-reply-chrome-extension && npm install`
3. `npm run build`

## Use
1. Go to [chrome://extensions/](chrome://extensions/)
2. Click on Load Unpacked extension...
3. Find and select github-quick-reply-chrome-extension/dist folder
4. Enable and enjoy!

## Features
1. Adds a quick reply icon and button to each comment
2. Clicking automatically mentions person you are replying to.
3. If text is highlighted clicking quick reply will automatically quote it.
4. On submit scrolls to bottom where comment should be.
