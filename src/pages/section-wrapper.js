import React from "react"
import Section1_11_Jul_Events from "./section-1-11jul-events"
import Section2_Gov_Response from "./section2-gov-response"
import Section4_People_Detained from "./section4-people-detained"
import Divider from "../components/divider"

import PeopleDetained from "../components/people_detained"

const SectionWrapper = () => {
  return (
    <>
      <div className="mt-64">
        <Divider />
        <div className="relative py-16 overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <Section1_11_Jul_Events />
            <Section2_Gov_Response />
            <Section4_People_Detained />

            <div className="my-12">
              <PeopleDetained />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper
