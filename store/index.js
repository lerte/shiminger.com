export const state = () => ({
  search_input: 'こんにちは'
})

export const mutations = {
  SET_SEARCH_INPUT(state, payload) {
    state.search_input = payload
  }
}
