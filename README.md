# ImagAIn [*ɪˈmædʒɪn*]
A very basic vanilla JavaScript app that integrates with OpenAI's DALL·E 2 API to generate images based on a user-entered text prompt. Adapted from Fireship's [Dream](https://github.com/fireship-io/javascript-course/tree/main/dream) app.

## Cloning the app
```bash
# Clone the repository
git clone https://github.com/Hanayou/ImagAIn.git
```


## Developing

Once you've cloned the project, there are a few steps required to get things set up.

1. Install dependcies with `npm install` (or `pnpm install` or `yarn`).

2. Create a `.env` file in the root directory to store your OpenAI API key


This repository does not include an OpenAI API key. To get one, create an [OpenAI account](https://openai.com/) and generate your own secret API key.

> [!IMPORTANT]
> You must provide your own OpenAI API key for this app to functional correctly. Additionally, the OpenAI API has no free tier. Your account must have a registered payment method or have available credits to generate a successful API response.


3. Add the following to your `.env` file created in the previous step
```bash
# Replace API_KEY with the API key you genereated
OPENAI="API_KEY"
```


### Run the development server
The front-end of the app is served via Vite and can be started locally with `npm run dev`.
When locally hosted, the app is accessible at [http://localhost:5173/](http://localhost:5173/).

The Node.js server that integrates with the OpenAI API can be started with `node server.js`.


## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.