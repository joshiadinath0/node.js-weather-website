
const request=require('request')


const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=34458adccaa9059105a6980438fd4835&query='+lat+','+long
    request({ url:url,json:true},(error,{body})=>{

    if(error){
        callback("Unable to connect to weatherStack")
    }
    else if(body.error){
        callback('Unable to find location')
    }   else{
      
     
  callback(undefined,body.current.weather_descriptions[0]+': It is currently '+body.current.temperature+' degrees.There is '+body.current.precip+' % chances of rain.')          

    }})
} 



module.exports=forecast
