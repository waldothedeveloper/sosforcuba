import "../styles/scrollbarHide.css"

import HLSVideoPlayer from "./hls-player"
// import InstaEmbed from "./instagramEmbed"
import PropTypes from "prop-types"
import React from "react"

const test = [
  {
    src: "https://stream.vidsrv.net/Pjr100vnwEp6f8FGe8lKM2nNu4VrmdHbZgUy400hgUXSo.m3u8",
    caption:
      "Forces of the cuban police taking two women detained, one of them with her child.",
    poster:
      "https://image.vidsrv.net/Pjr100vnwEp6f8FGe8lKM2nNu4VrmdHbZgUy400hgUXSo/thumbnail.png?width=600&height=600&fit_mode=pad",
  },
  {
    src: "https://stream.vidsrv.net/MzkuMiOgvDDcCAEKv01rS1SoTBsU5IGF7ivTYY1L00FZQ.m3u8",
    caption: "Police and 'MININT' forces are beating a man without mercy",
    poster:
      "https://image.vidsrv.net/MzkuMiOgvDDcCAEKv01rS1SoTBsU5IGF7ivTYY1L00FZQ/thumbnail.png?width=600&height=600&fit_mode=pad&time=04",
  },
  {
    src: "https://stream.vidsrv.net/hHypAKlflbmhO8XjxvrRt01hltVkimR4AUqyxv3fcClI.m3u8",
    caption: "MININT and police forces using guns against unarmed protesters.",
    poster:
      "https://image.vidsrv.net/hHypAKlflbmhO8XjxvrRt01hltVkimR4AUqyxv3fcClI/thumbnail.png?width=600&height=600&fit_mode=pad",
  },
  {
    src: "https://stream.vidsrv.net/g5MfAOAeQ00oqEqc7gQMbkzXOM8ZKDCMIUIfxtZS4VM8.m3u8",
    caption:
      "Military personnel dressed as civilians and the police taking a minor detained.",
    poster:
      "https://image.vidsrv.net/g5MfAOAeQ00oqEqc7gQMbkzXOM8ZKDCMIUIfxtZS4VM8/thumbnail.png?width=600&height=600&fit_mode=pad&time=06",
  },
  {
    src: "https://stream.vidsrv.net/r7yYbacYmkPckZ2l9pYKXb00qXLqZd9sheWlA4GlFsew.m3u8",
    caption: "A woman is carried after being beaten to death",
    poster:
      "https://image.vidsrv.net/r7yYbacYmkPckZ2l9pYKXb00qXLqZd9sheWlA4GlFsew/thumbnail.png?width=600&height=600&fit_mode=pad&time=08",
  },
  {
    src: "https://stream.vidsrv.net/tF5fE3JrhDY00LbRBG9aoCjKuk6CHk4015JGCkPRUlmek.m3u8",
    caption:
      "Forces of the police and military dressed as civilians beating protesters, and using pepper spray",
    poster:
      "https://image.vidsrv.net/tF5fE3JrhDY00LbRBG9aoCjKuk6CHk4015JGCkPRUlmek/thumbnail.png?width=600&height=600&fit_mode=pad&time=23",
  },
  {
    src: "https://stream.vidsrv.net/bK5hUOzg3vdQHaEfv2F3JAvjJvt5BbkgCO1YRLnFFNA.m3u8",
    caption:
      "Military personnel dressed as civilians beating people and taking people detained",
    poster:
      "https://image.vidsrv.net/bK5hUOzg3vdQHaEfv2F3JAvjJvt5BbkgCO1YRLnFFNA/thumbnail.png?width=600&height=600&fit_mode=pad&time=22",
  },
  {
    src: "https://stream.vidsrv.net/gsLiT02RInEBplhsKdbzeq825rQ02phF7GCET7KGyTlis.m3u8",
    caption: "A woman argues with a communism militar dressed as civilian",
    poster:
      "https://image.vidsrv.net/gsLiT02RInEBplhsKdbzeq825rQ02phF7GCET7KGyTlis/thumbnail.png?width=600&height=600&fit_mode=pad",
  },
  {
    src: "https://stream.vidsrv.net/nJ8EpZKAue9oIQL004sPt7ltS8nOVcuG7boYtnR00hRhs.m3u8",
    caption: "A brave woman punching and fighting with police",
    poster:
      "https://image.vidsrv.net/nJ8EpZKAue9oIQL004sPt7ltS8nOVcuG7boYtnR00hRhs/thumbnail.png?width=600&height=600&fit_mode=pad",
  },
]

const SocialMediaEmbedCarousel = () => (
  <div
    id="hide-scrollbar"
    className="flex overflow-y-hidden overflow-x-scroll md:grid md:max-w-none md:grid-cols-2 md:gap-6"
  >
    {test.map(file => (
      <div key={file.src} className="rounded-lg">
        <div className="flex px-1 md:flex-col md:px-0">
          {/* md:aspect-w-3 md:aspect-h-2 w-48 md:w-full */}
          <div className="w-48 md:aspect-w-16 md:aspect-h-9 md:w-full">
            <HLSVideoPlayer url={file.src} poster={file.poster} />
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default SocialMediaEmbedCarousel

SocialMediaEmbedCarousel.propTypes = {
  test: PropTypes.array,
}
