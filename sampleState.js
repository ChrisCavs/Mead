{
  entities: {
    users: {
      1: {
        id: 1,
        name: '',
        email: '',
        image_url: '',
        authoredStoryIds: [],
        followedUserIds: [],
        followedUserStoryIds: [],
        followsIds: []
      }
    }

    stories: {
      1: {
        id: 1,
        title: '',
        subtitle: '',
        body: '',
        image_url: '',
        author_id: 1,
        claps: 20
      }
    },

    comments: {
      1: {
        id: 1,
        authorId: 2,
        storyId: 1,
        body: '',
        claps: 20
      }
    },
    popularStories: {
      100: {
        id: 100,
        title: '',
        subtitle: '',
        body: '',
        image_url: '',
        author_id: 1,
        claps: 20
      }
    },
    feed: {
      1: {
        id: 1,
        title: '',
        subtitle: '',
        body: '',
        image_url: '',
        author_id: 1,
        claps: 20
      }
    }
  },

  UI: {
    loading: true / false,
    modalShow: {
      show: true / false,
      page: 'login' / 'signup'
    }
  },

  errors: {
    login: ["Incorrect username/password"],
    storyForm: ["Body cannot be left blank"]
  }
  session: {
    currentUserId: 1
  }
}