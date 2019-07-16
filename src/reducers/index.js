import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth, * as fromAuth from './auth.js'
import echo, * as fromEcho from './echo.js'
import ud, * as fromUD from './retrieveUserData.js'
import ru, * as fromRU from './registerUser.js'
import sd, * as fromSD from './retrieveSiteData.js'
import cd, * as fromCD from './retrieveComplexData.js'
import fd, * as fromFD from './retrieveFacilityData.js'
import ed, * as fromED from './retrieveEquipmentData.js'
import dd, * as fromDD from './retrieveDetailData.js'
import wd, * as fromWD from './retrieveWorkItemData.js'
import sae, * as fromSAE from './setActiveEqp.js'

export default (history) => combineReducers({
    auth: auth,
    echo: echo,
    ud: ud,
    ru: ru,
    sd: sd,
    cd: cd,
    fd: fd,
    ed: ed,
    dd: dd,
    wd: wd,
    sae: sae,
    router:connectRouter(history)
});

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const serverMessage = state => fromEcho.serverMessage(state.echo)
export const userData = state => fromUD.userData(state.ud)
export const registerUser = state => fromRU.registerUser(state.ru)
export const registerResponse = state => fromRU.response(state.ru)
export const siteData = state => fromSD.siteData(state.sd)
export const complexData = state => fromCD.complexData(state.cd)
export const facilityData = state => fromFD.facilityData(state.fd)
export const equipmentData = state => fromED.equipmentData(state.ed)
export const detailData = state => fromDD.detailData(state.dd)
export const setActiveEqp = state => fromSAE.setActiveEqp(state.sae)
export const workItemData = state => fromWD.workItemData(state.wd)

export function withAuth(headers={}){
    console.log("CHECK");
    console.log(headers);
    return (state) =>(
        {
        ...headers,
        'Authorization': `Bearer ${accessToken(state)}`
    })
}
