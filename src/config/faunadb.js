import faunadb from "faunadb"
const q = faunadb.query
const FaunaDbClient = new faunadb.Client({
  secret: `${process.env.fauna_api_secret}`,
})

export const saveProtestInDB = ({ data }) =>
  FaunaDbClient.query(
    q.Create(q.Collection("all_protests"), {
      data: data,
    })
  )
