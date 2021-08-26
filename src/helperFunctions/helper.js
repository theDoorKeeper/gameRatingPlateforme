export const fadeAway = (callback)=>{
    setTimeout(()=>{
        callback(false)
    },1500)
}