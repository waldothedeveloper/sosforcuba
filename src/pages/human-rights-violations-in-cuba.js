import React from "react"
import Layout from "../components/layout"

const Section5_Human_Rights = () => {
  return (
    <Layout>
      <div className="py-32 prose prose-red prose-lg text-gray-300 mx-auto max-w-sm px-4 md:px-0 md:max-w-4xl">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              Human Rights Violations in Cuba
            </span>
          </h1>
        </div>

        <p>
          There are over 17 human rights violations by the communist government
          of Cuba. They started after 1959 and for{" "}
          {new Date().getFullYear() - 1959} years have not stopped.
        </p>

        <ol className="text-yellow-400 font-medium">
          <li>No Freedom of Speech.</li>
          <li>No Freedom of the Press</li>
          <li>Restrictions on Freedom of Religion</li>
          <li>No Freedom of Expression, Association</li>
          <li>Restricted Freedom of Assembly</li>
          <li>No Freedom to keep or bear Arms</li>
          <li>Full State control of Media</li>
          <li>
            Arbitrary Detention and Imprisonment without Due Process and Trials
          </li>
          <li>Travel Restrictions</li>
          <li>No Free Enterprise</li>
          <li>Heavy Taxation and Sanctions</li>
          <li>Political Prisoners</li>
          <li>Abuse and Execution of Political Opposition</li>
          <li>Citizen Oppression by Coercion, Fear, and Punishment</li>
          <li>Forced Labor Camps and Abuse of Prisoners</li>
          <li>Control access to information over the Internet</li>
          <li>Forced youth labor in agricultural camps</li>
          <li>Use of Police Coercion and Brutality</li>
        </ol>

        <p>
          The citizens of Cuba live in genuine fear due to the dark government
          history of repression, beatings, public shaming acts, harassment,
          fines, detentions, and surveillance.
        </p>

        <p>
          The U.S. Department of State contains a highly detailed document
          containing the 2020 Country Reports on Human Rights Practices in Cuba.
          You can read the referenced document{" "}
          <a
            target="_blank"
            href="https://www.state.gov/reports/2020-country-reports-on-human-rights-practices/cuba/"
            rel="noreferrer noopener"
          >
            <span className="text-yellow-400 underline font-medium">here.</span>
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default Section5_Human_Rights
