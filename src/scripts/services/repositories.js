import { baseUrl, repositoriesQuantity } from '/src/scripts/variables.js'

async function getRepos(userId) {
    const response = await fetch(`${baseUrl}${userId}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export { getRepos }