const user = {
    avatarUrl: '',
    avatarName: '',
    bio: '',
    name: '',
    followers: '',
    following: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.avatarName = gitHubUser.name
        this.bio = gitHubUser.bio
        this.name = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = []
        const filteredEvents = events.filter(value => value.type === "CreateEvent" || value.type === "PushEvent")
        filteredEvents.forEach((element) => {
            if (element.type === "PushEvent") {
                this.events.push({ repo: element.repo.name, message: element.payload.commits[0].message })
            } else if (element.type === "CreateEvent") {
                this.events.push({ repo: element.repo.name, message: "Create Event" })
            }
        })
    }
}

export { user }