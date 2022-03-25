const CMMT1=require('../models/CMMT1.model');
const helper=require('../config/helpers')
var moment=require("moment");
const TZ = moment.tz("Asia/Kolkata").format();
var axios=require('axios')


exports.postRecords=async(req,res,next)=>{
      
      key="5afd5b5bcab935161bee432f1bc21d1f043787455f6bb135"
     sid="transganization2"
     token="0c390c278d2f9805143307a9befedf54f66343499ed0786c"
    
    
from="9850674452"

to="8767984910"
body="Good Evening"

const formUrlEncoded = x =>Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')


url="https://"+key+":"+token+"@api.exotel.in/v1/Accounts/"+sid+"/Sms/send.json"
axios.post(url, 
   formUrlEncoded({
  "From": from,
  "To": to,
  "Body":body
}),
{   
    withCredentials: true,
    headers: {
        "Accept":"application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded"
    }
  },
  )
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})          

};
