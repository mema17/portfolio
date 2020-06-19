const initialState = {
    selectedExperience: {
        name: null,
        shortDesc: null,
        jobs: null,
        languages: null,
        fullImgPath: null,
        fullDesc: null,
        link: {
            name: null,
            adress: null
        }
    }
}

const experienceSelector = (state = initialState, { type, payload }) => {
    switch (type) {

        case "SELECT_EXPERIENCE":
            return {
                ...state,
                selectedExperience: {
                    ...state.selectedExperience,
                    name: payload.name,
                    shortDesc: payload.shortDesc,
                    jobs: payload.jobs,
                    languages: payload.languages,
                    fullImgPath: payload.fullImgPath,
                    fullDesc: payload.fullDesc,
                    link: {
                        ...state.selectedExperience.link,
                        name: payload.link.name,
                        address: payload.link.address
                    }

                }
            }

        default:
            return state
    }
}

export default experienceSelector;