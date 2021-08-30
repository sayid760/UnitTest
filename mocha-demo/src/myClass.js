const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class MyClass{
    constructor(){
        console.log('initiate')
    }
    add(arg1, arg2){
        const res = arg1 + arg2
        console.log(res)
        return res
    }
    sayHello(str){
        console.log(str)
    }
    callAnotherFn(arg1, arg2){
        this.sayHello()
        return this.add(arg1, arg2)
    }
    callTheCallback(callback){
        callback()
    }
    testPromise(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => resolve(3), 4000)
        }).then(result => {
            return result*2
        })
    }
    xhrFn() {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest()
          xhr.open("post", "https://echo-service-new.herokuapp.com/echo", true)
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText))
              } else {
                reject(xhr.status)
              }
            }
          }
          xhr.send()
        })
        .then(function(result) {
            return result
        })
        .catch(error => {
            return error
        })
    }
    
}

module.exports = MyClass