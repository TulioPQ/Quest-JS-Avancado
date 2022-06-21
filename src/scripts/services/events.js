import { baseUrl, repositoriesQuantity } from '/src/scripts/variables.js'

async function getEvents(userId) {
    const response = await fetch(`${baseUrl}${userId}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getEvents }