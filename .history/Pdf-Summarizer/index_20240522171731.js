require('dotenv').config()
const {Client } = require("@octoai/client")

const client = new Client(process.env.OCTOAI_TOKEN)
 