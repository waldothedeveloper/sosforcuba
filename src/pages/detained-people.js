import GettyImages from "../components/gettyImages"
import HLSVideoPlayer from "../components/hls-player"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import PeopleDetained from "../components/people_detained"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import StatisticsOfDetainedPeople from "../components/statistics_of_detained_people"
import { TwitterTweetEmbed } from "react-twitter-embed"
import YoutubeEmbed from "../components/youtubeEmbed"

const DetainedPeople = () => {
  return (
    <Layout>
      <div className="prose prose-lg prose-red mx-auto max-w-sm px-4 pt-32 text-gray-300 md:max-w-4xl md:px-0">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-base font-semibold uppercase tracking-wide text-red-600">
              events July 12-22, 2021
            </span>
            <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-50 sm:text-4xl">
              Missing and Detained People
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 pt-12">
          <GettyImages
            url="http://www.gettyimages.com/detail/1233949303"
            src="//embed.gettyimages.com/embed/1233949303?et=r8odOetkQ2dZkP1NFRvuag&tld=com&sig=x0eDHfzBfPVzFKcyZfWM8sHhTsyAXM-drh8ePptrQhw=&caption=true&ver=1"
          />

          <p>
            In response to the demonstrations, members of the National
            Revolutionary Police, the Riot Squads, and the State Security
            Department carried out arbitrary arrests and physical attacks
            against people who were demonstrating peacefully, including
            university students.
          </p>
        </div>

        {/* Anyelo Troya */}
        <p>
          <OutboundLink
            target="_blank"
            href="https://twitter.com/AnyeloTroyaGonz"
            rel="noreferrer noopener"
          >
            <span className="font-medium text-yellow-400 underline">
              Anyelo Troya Gonzalez
            </span>
          </OutboundLink>
          , a Cuban photographer, was on the streets on July 11th documenting
          the protests. He was later detained and sentenced to 1 year in prison
          in a summary trial{" "}
          <span className="font-medium text-yellow-400">
            {" "}
            -without a lawyer-{" "}
          </span>{" "}
          just for filming the{" "}
          <span className="font-medium text-red-500"> #11JulyCuba </span>{" "}
          protests.
        </p>
        <TwitterTweetEmbed
          tweetId="1417946236384993280"
          placeholder="loading"
        />
        {/* Dina Stars */}
        <p>
          <OutboundLink
            target="_blank"
            href="https://twitter.com/Dinastars_"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-yellow-400 underline">
              Dina Stars
            </span>
          </OutboundLink>
          , a popular Cuban Youtuber and influencer was detained by government
          security forces on{" "}
          <OutboundLink
            href="https://www.npr.org/2021/07/14/1015837541/a-popular-youtuber-is-detained-by-cuban-police-on-live-tv-in-a-roundup-of-critic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-yellow-400 underline">
              live television Tuesday morning
            </span>
          </OutboundLink>{" "}
          as she was discussing the sweeping arrests of activists, protesters
          and journalists.
        </p>
        <YoutubeEmbed embedId="S-gGqfryL-A" />
        <blockquote>
          <p>
            I hold the government responsible for anything that may happen to me
          </p>
        </blockquote>
        <p>
          the 25-year-old youtuber told the program&apos;s host before abruptly
          leaving the interview.
        </p>
        <p>She added:</p>
        <blockquote>
          <p>I have to go. They told me to accompany them.</p>
        </blockquote>
        {/* 27NCuba */}
        <p>
          The{" "}
          <OutboundLink
            target="_blank"
            href="https://twitter.com/27Ncuba"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-yellow-400 underline">
              27NCuba
            </span>
          </OutboundLink>{" "}
          movement is a group of independent Cuban artists, writers, thinkers,
          and civil society members that formed in the wake of the unjust arrest
          of rapper Denis Solis Gonzalez on November 27, 2020.
        </p>
        <p>
          Here&apos;s a video of the arrests after peacefully protesting in
          front of the Cuban Institute of Radio and Television (ICRT in spanish)
        </p>
        {/* 27NCuba movemement */}
        <TwitterTweetEmbed
          tweetId="1414389085003784194"
          placeholder="Loading"
        />
        <p>
          <OutboundLink
            target="_blank"
            href="https://twitter.com/LMOAlcantara"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-yellow-400 underline">
              Luis Manuel Otero
            </span>
          </OutboundLink>{" "}
          , who is a Cuban performance artist known for his public performances
          that openly criticize the Cuban government and its policies, said in a
          video posted on July 11th.
        </p>
        <blockquote>
          <p>
            Family, I&apos;m going to the streets...it has been too much of this
            dictatorship, S.O.S Cuba, we need democracy.
          </p>
        </blockquote>
        <div className="aspect-w-16 aspect-h-9">
          <HLSVideoPlayer
            url="https://stream.vidsrv.net/xrZMBltEjrnlrYa3xwi8ywoeQ9GtFbCsgNlHBjfFlRM.m3u8"
            poster="https://image.vidsrv.net/xrZMBltEjrnlrYa3xwi8ywoeQ9GtFbCsgNlHBjfFlRM/thumbnail.png?width=1920&height=1080&fit_mode=pad"
          />
        </div>
        {/* <InstaEmbed url="https://www.instagram.com/p/CRMcwjlBz74/" /> */}
        <span className="block py-12 text-center text-3xl font-extrabold leading-8 tracking-tight text-yellow-400 sm:text-4xl">
          He was detained and sent to a maximum-security prison.
        </span>
        <span className="block py-12 text-center text-3xl font-extrabold leading-8 tracking-tight text-yellow-400 sm:text-4xl">
          Allegedly accused of Attack, Resistance, and Contempt.
        </span>
        <p>
          Jose Miguel Vivanco, the executive director of Humans Right Watch for
          the Americas is calling for his immediate release.
        </p>

        <div className="grid md:grid-cols-3 md:gap-6">
          <TwitterTweetEmbed
            tweetId="1416362092932780032"
            placeholder="loading"
          />
          <TwitterTweetEmbed
            tweetId="1417856137206980609"
            placeholder="loading"
          />
          <TwitterTweetEmbed
            tweetId="1417580302487195650"
            placeholder="loading"
          />
        </div>

        <p>
          And no one scapes to this level of repression, Spanish-born{" "}
          <OutboundLink
            target="_blank"
            href="https://www.instagram.com/aprespinosa/"
            rel="noopener noreferrer"
          >
            <span className="font-medium text-yellow-400 underline">
              Ramon Espinosa
            </span>
          </OutboundLink>
          , a staff photographer with Associated Press (AP), was attacked by the
          police while covering the protests.
        </p>
        <div className="grid md:grid-cols-2 md:gap-6">
          {/* Ramon Espinosa AP photographer */}
          <GettyImages
            url="http://www.gettyimages.com/detail/1233931176"
            src="//embed.gettyimages.com/embed/1233931176?et=KDFSNRkSQ1ZIJ2fmJu3g7Q&tld=com&sig=5lEyMGWCUbUEG4DbCbVGYEgiRN3e_124oL_lsrX5eVs=&caption=true&ver=1"
          />

          <GettyImages
            url="http://www.gettyimages.com/detail/1233931147"
            src="//embed.gettyimages.com/embed/1233931147?et=eSN5cJkCTxhsjPvCZV8UdQ&tld=com&sig=KxfskqclSFNmrhXShKv3pFfaExqfMZaTIM7f7pLKua4=&caption=true&ver=1"
          />
        </div>

        {/* Jose Daniel Ferrer UNPACU */}
        <p>
          <OutboundLink
            target="_blank"
            href="https://twitter.com/jdanielferrer"
            rel="noreferrer noopener"
          >
            <span className="font-medium text-yellow-400 underline">
              José Daniel Ferrer García
            </span>
          </OutboundLink>{" "}
          is a Cuban human rights activist and leader of the Patriotic Union of
          Cuba (UNPACU in Spanish). Jose was detained since July 11th by the
          regime. He has been a political prisoner twice. No information has
          been made public about his conditions, and many wonder if he&apos;s
          still alive.
        </p>

        <StaticImage
          imgStyle={{ borderRadius: "0.5rem" }}
          className="object-top"
          src="../images/jdferrer.jpg"
          alt="Jose Daniel Ferrer, opposing leader of the Cuban communist party"
          placeholder="blurred"
          layout="fullWidth"
          transformOptions={{ fit: "cover" }}
        />

        <p>
          Here&apos;s a video where his wife and son demand the government to
          see him. They mention that no one is allow to see him, speak, or send
          him medicines. The authorities are keeping him in solitary
          confinement.
        </p>

        <TwitterTweetEmbed
          tweetId="1417823784355213312"
          placeholder="loading"
        />

        <p>His wife also said:</p>

        <blockquote>
          <p>
            We&apos;re going to attempt to see him at the Center of Operations
            and Investigations of Criminal Instruction of Santiago of Cuba, the
            center of torture here in Santiago, if we haven&apos;t come back by
            8 pm, we have also been detained.
          </p>
        </blockquote>

        <p>
          On April 22, 2021 Senators{" "}
          <span className="font-medium text-yellow-400 underline">
            Rick Scott, Marco Rubio, and Ted Cruz
          </span>{" "}
          introduced a{" "}
          <OutboundLink
            href="https://www.rickscott.senate.gov/sen-rick-scott-leads-resolution-honoring-cuban-democracy-and-human-rights-leader-jose-daniel-ferrer"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="font-medium text-yellow-400 underline">
              resolution
            </span>
          </OutboundLink>{" "}
          honoring the efforts of Cuban democracy and human rights activist{" "}
          <span className="underline">José Daniel Ferrer</span> and the vital
          contribution and humanitarian efforts of the Patriotic Union of Cuba
          (UNPACU).
        </p>

        <p>
          Others whose disappearances have been documented include the director
          of Hora de Cuba, Henry Constantin; Iris Mariño Garcia; Neife Rigau and
          Orelvys Cabrera Sotolongo; Rolando Rodriguez Lobaina; and Niober
          Garcia.
        </p>

        <StatisticsOfDetainedPeople />

        <blockquote>
          <p>
            The list start to resemble the thousand of Polish-Jewish people that
            died in the Holocaust
          </p>
        </blockquote>
      </div>
      <PeopleDetained />
    </Layout>
  )
}

export default DetainedPeople
