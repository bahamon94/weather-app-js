export const state = () => ({
    idBogota : 3688689,
    idParis :2988507,
    idLyon : 2996944,
    apiKeyApp : process.env.KEYAPI
})

export const mutations = {}

export const getters = {
    get_bogota(state) {
      return state.idBogota
    },
    get_paris(state) {
        return state.idParis
    },
    get_lyon(state) {
    return state.idLyon
    },
    get_apiKey(state){
        return state.apiKeyApp
    }
}