import rpc from './rpc'

export default async function getNotionUsers(ids: string[]) {
  const { results = [] } = await rpc('getRecordValues', {
    requests: ids.map((id: string) => ({
      id,
      table: 'notion_user',
    })),
  })

  const users: any = {}

  for (const result of results) {
    console.log(result)
    const { value } = result || { value: {} }
    const { name, given_name, family_name } = value
    let full_name = given_name || ''

    if (name) {
      full_name = `${name}`
    }
    if (family_name) {
      full_name = `${full_name} ${family_name}`
    }
    users[value.id] = { full_name }
  }

  return { users }
}
