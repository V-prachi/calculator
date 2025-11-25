 let input = document.getElementsByTagName("input")[0]
 let btn = document.querySelectorAll("button")
 let arr = Array.from(btn)
 let store = ""
 btn.forEach((b)=>{
        b.addEventListener("click",(e)=>{
            if(e.target.innerHTML=== "AC"){
             store=""
                input.value=store
                return
            } 

             if(e.target.innerHTML=== "C"){
             store = store.slice(0,-1)
                input.value=store
                    return
            } 

          
            if(e.target.innerHTML=== "="){
              store= eval(input.value)
              input.value=store
              return
            }

       store= store+e.target.innerHTML
        input.value=store
            //!!!!!!!!!!!!!!!! appa !!!!!!!!!!!!!!!!!!

            if(store === "12/8"){
              store= "I Love you appa"
              input.value=store
                  store = "";
              
            }
            if(store === "26/02/2006"){
              store= "My best math shifu"
              input.value=store
                  store = "";
              
            }
            
            if(store === "12/9/2003"){
              store= "aisitiru ,didi"
              input.value=store
                  store = "";
              return
            }
            if(store === "17/10/2000"){
              store= "Wo ai ni, love you"
              input.value=store
                  store = "";
              return
            }
            if(store === "3/6/2006"){
              store= "I believe you VPrachi."
              input.value=store
                  store = "";
              return
            }
            if(store === "6/3/2007"){
              store= "Mature boy"
              input.value=store
                  store = "";
              return
            }
            if(store === "1/2/"){
              store= "pure aur poora love"
              input.value=store
                  store = "";
              return
            }
                       
            if(store === "10/10/2014"){
              store= "aisitiru Devansh"
              input.value=store
              store = "";
              return
            }            if(store === "27/2/2007"){
              store= "You’re my favorite cell my baby"
              input.value=store
                  store = "";
              return
            }

        })
 
        
 })
 
