const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'} </h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p class="followers-following">👥Seguidores: ${user.followers} Seguindo: ${user.following}</p>
                                        </div>
                                    </div>`
        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target=_blank>${repo.name}<br>
        🍴 ${repo.forks_count} ⭐ ${repo.stargazers_count} 👀 ${repo.watchers_count} 👩‍💻 ${repo.language}</a></li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventsItens = ""
        user.events.forEach((element) => eventsItens += `<li> <strong>${element.repo}</strong> - ${element.message}</li>` )
        if (user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }