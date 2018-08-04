interface Name {

}

interface Details {

}

interface Images {

}

export interface ICamera {
    id,
    name : Name,
    details : Details,
    images : Images
}


// "camera":[  
//     {  
//        "id":"eos_5d_mark_iii",
//        "name":{  
//           "_content":"Canon EOS 5D Mark III"
//        },
//        "details":{  
//           "megapixels":{  
//              "_content":"22.3"
//           },
//           "lcd_screen_size":{  
//              "_content":"3.2"
//           },
//           "memory_type":{  
//              "_content":"CompactFlash, Secure Digital, SDHC, SDXC"
//           }
//        },
//        "images":{  
//           "small":{  
//              "_content":"https:\/\/farm8.staticflickr.com\/7184\/cameras\/72157622292089908_model_small_99bff53988.jpg"
//           },
//           "large":{  
//              "_content":"https:\/\/farm8.staticflickr.com\/7184\/cameras\/72157622292089908_model_large_497d3698ba.jpg"
//           }
//        }
//     },