export const useUserData = defineStore("user", {
  state: () => ({
    isLogin: false,
    token: ''
  })
});