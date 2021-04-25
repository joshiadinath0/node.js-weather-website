const request=require('request')

const geocode=(address,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoiam9zaGlhZGluYXRoMCIsImEiOiJja25wd2RlcjAxdGc1Mm9ueDI1dmN3MXcyIn0.LJbrhcHX2AzoUKJtpol_PA&limit=1'

    request({ url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to network services',undefined)
        }
        else if(body.features.length===0){
            callback('Unable to find location',undefined)
        }
        else{
        callback(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        
        })   
        }
    })
}


module.exports=geocode