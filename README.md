# openai-image-generator

To use the this app, sign up for an OpenAI account and acquire the API keys.

1. Clone this repo and run the command below in the terminal:

    ```bash
    mv .env.example .env

    npm i
    ```

2. Paste your OpenAI key in the `.env` file.

3. Run the server using the command `npm run dev`.
4. Open Postman and send a `POST` request to `http://localhost:5000/openapi`. The body of this request should contain a field `prompt` with the value of the description of the image you want to be generated. For exmaple `A man on the moon`.
5. Click on the url of the API response.