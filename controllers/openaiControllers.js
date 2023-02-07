const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// generate an image
const generateImage = async (req, res) => {
    try {
        const response = await openai.createImage({
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
          });
          
        res.status(200).json({
            success: true,
            results: response
        })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }

        res.status(400).json({
            success: false,
            message: 'Image could not be generated'
        })
    }
}

module.exports = {
    generateImage
}