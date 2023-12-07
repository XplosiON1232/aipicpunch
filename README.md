# AI Pic Puncher
Simple tool for calling the API to a carefree-creator server!

**\>> [Start a server here](https://colab.research.google.com/github/carefree0910/carefree-creator/blob/dev/tests/server.ipynb) <<**

## How to use
1. Start a server: [Google Colab](https://colab.research.google.com/github/carefree0910/carefree-creator/blob/dev/tests/server.ipynb)
2. Run all steps and copy the ngrok URL that's printed out in the beginning of the last script
3. Go to [picgen.xplosion.io](https://picgen.xplosion.io) or download and open the `index.html` file
4. Paste the ngrok URL into `Base URL` input field. Once the script prints out `Server Ready!` in the colab, it should work
5. Enter a prompt for the image in `Prompt` input field, seperate details with a comma `,`
6. Ping the server to make sure it's up, in the `JSON API Body` field it should say `Hello, {prompt}`
7. Click `Generate 1x` and wait
8. You can see in the logs of the colab that the right models are loading into the RAM
9. After a while it should work and you can generate more images, quickly.
10. Done! 💎 Enjoy generating!

## Features
> ⚠ Super early in development!
- Customize Prompt
- Easyfix Included (forced for now)
- Simple but good overview for all your generated images
- Queue multiple generates
- Images are simply added to the page, refresh will erase all images
- Client based API requests

## Upcoming
- Full API customization
- Easyfix toggle
- Model toggle
- Multiple server-urls
- New UI?
- More?
