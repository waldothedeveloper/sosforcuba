import React from "react"
// import InstaEmbed from "./instagramEmbed"
import PropTypes from "prop-types"
import "../styles/scrollbarHide.css"
import HLSVideoPlayer from "./hls-player"

const test = [
  {
    src: "https://stream.mux.com/Pjr100vnwEp6f8FGe8lKM2nNu4VrmdHbZgUy400hgUXSo.m3u8",
    caption:
      "Forces of the cuban police taking two women detained, one of them with her child.",
  },
  {
    src: "https://stream.mux.com/MzkuMiOgvDDcCAEKv01rS1SoTBsU5IGF7ivTYY1L00FZQ.m3u8",
    caption: "Police and 'MININT' forces are beating a man without mercy",
  },
  {
    src: "https://stream.mux.com/hHypAKlflbmhO8XjxvrRt01hltVkimR4AUqyxv3fcClI.m3u8",
    caption: "MININT and police forces using guns against unarmed protesters.",
  },
  {
    src: "https://stream.mux.com/g5MfAOAeQ00oqEqc7gQMbkzXOM8ZKDCMIUIfxtZS4VM8.m3u8",
    caption:
      "Military personnel dressed as civilians and the police taking a minor detained.",
  },
  {
    src: "https://stream.mux.com/r7yYbacYmkPckZ2l9pYKXb00qXLqZd9sheWlA4GlFsew.m3u8",
    caption: "A woman is carried after being beaten to death",
  },
  {
    src: "https://stream.mux.com/tF5fE3JrhDY00LbRBG9aoCjKuk6CHk4015JGCkPRUlmek.m3u8",
    caption:
      "Forces of the police and military dressed as civilians beating protesters, and using pepper spray",
  },
  {
    src: "https://stream.mux.com/bK5hUOzg3vdQHaEfv2F3JAvjJvt5BbkgCO1YRLnFFNA.m3u8",
    caption:
      "Military personnel dressed as civilians beating people and taking people detained",
    img: "https://image.mux.com/bK5hUOzg3vdQHaEfv2F3JAvjJvt5BbkgCO1YRLnFFNA/thumbnail.jpg",
  },
]

const SocialMediaEmbedCarousel = () => (
  <div
    id="hide-scrollbar"
    className="flex overflow-x-scroll overflow-y-hidden md:grid md:grid-cols-3 md:gap-4 md:max-w-none"
  >
    {test.map(file => (
      <div key={file.src} className="flex flex-nowrap rounded-lg">
        <div className="flex px-1 md:px-0 md:flex-col">
          <div className="flex max-w-xs md:max-w-8xl">
            <div className="space-y-2 md:space-y-12">
              <div className="md:aspect-w-3 md:aspect-h-2 w-48 md:w-full">
                <HLSVideoPlayer url={file.src} />
              </div>

              <div className="md:space-y-2">
                <div className="text-xs leading-6 font-medium">
                  <p className="text-gray-500">{file.caption}</p>
                </div>
              </div>
            </div>
            {/* <InstaEmbed url={file.src} /> */}
          </div>
          {/* <figure className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img className="w-auto h-auto object-cover" src={photo} alt="" />
          </figure> */}
        </div>
      </div>
    ))}
  </div>
)

export default SocialMediaEmbedCarousel

SocialMediaEmbedCarousel.propTypes = {
  test: PropTypes.array,
}
