import * as contants from './contants'
import axios from 'axios'
 let changeLogin=()=>({
     type:contants.CHANGE_LOGIN,
     value:true

 })
 let changeLogout=()=>({
     type:contants.LOGOUT
 })
 export const login=(account,password)=>{
    return(dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then(res=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        })
    }
 }
 export const logout=()=>{
     return(dispatch)=>{
         dispatch(changeLogout())
     }
 }