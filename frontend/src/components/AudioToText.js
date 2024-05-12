import { AssemblyAI } from 'assemblyai'

const client = new AssemblyAI({
  apiKey: "7fc5ffbec7174fd4baf7a502f6c77965"
})

const audioUrl =
  'audio.mp3'

const config = {
  audio_url: audioUrl
}



const run = async () => {
  const transcript = await client.transcripts.create(config)
  console.log(transcript.text)
}

run()