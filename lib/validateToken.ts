// TODO: validate token
import fetchtoken from './fetchToken'

export default async function validateToken(id: number, token: string): Promise<any> {
    const exists = await fetchtoken(id, true)
    if (exists == null) {
        return false
    } else if (exists == token){
        return true
    }
}
