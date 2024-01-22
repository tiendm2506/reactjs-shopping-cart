import axiosClient from './axiosClient'

const userApi = {
    register(params) {
        const url = '/auth/local/register'
        return axiosClient.post(url, params)
    },
    login(params) {
        const url = '/auth/local'
        return axiosClient.post(url, params)
    }
}

export default userApi
