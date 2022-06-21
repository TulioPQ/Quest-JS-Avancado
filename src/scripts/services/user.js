import { baseUrl } from '/src/scripts/variables.js'

async function getUser(userId) {
    const response = await fetch(`${baseUrl}${userId}`)
    return await response.json()
}

export { getUser }