export const $api = $fetch.create({
  async onRequest({ options }) {
    options.baseURL = useRuntimeConfig().public.apiBaseUrl || 'http://localhost:1900/api'

    options.headers = {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }

    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
  },

  async onResponse({ response }) {
    //response handling
  },

  async onError({ error }) {
    //error handling
  },
})
