export const AnimationReducer = (state, action) => {
  switch (action.type) {
      case 'ANIMATION_START':
          return {
            ...state,
            bgVisible: false,
          }
      case 'ANIMATION_END':
          return {
            ...state,
            bgVisible: true,
            redirect: true,
          }
      default:
          return state;
  }
}