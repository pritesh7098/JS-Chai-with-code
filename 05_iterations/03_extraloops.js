/* const map = new Map()
map.set('pritu',"pritesh")
map.set('pritush',"bhaiya")
map.set('prits',"sir")
//console.log(map);

for (const name of map) {
    //console.log(name);
    
}

const myobj =  {

name:"pritesh"

}

//console.log(myobj);

for (const name of myobj) {
    console.log(name);

}

*/

const map = new Map()
map.set('pritu',"pritesh")
map.set('pritush',"bhaiya")
map.set('prits',"sir")
//console.log(map); 

for (const name in map) {
    console.log(name);
    
}

const data = [
    {

stname:"pritesh",
rno:13

},
   {

    stname:"pritesh",
    rno:13
    
    },
    {

        stname:"pritesh",
        rno:13
        
        }
    ]


    data.forEach( (item) => {

            console.log(item);
        
    });