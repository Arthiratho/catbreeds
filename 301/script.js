// async function call(){

//     try{
//         var op = await  fetch("https://api.thecatapi.com/v1/breeds");
//         var data = await op.json();
//         console.log(data);
        
//         // for (cats of data){

//         //     const a = document.getElementById('san');
//         //     a.innerHTML = `${cats.name}
//         //      ${cats.description}`;
    
//         //    // document.body.append(a);
//         //     console.log(a);
//         // }
//     }catch{
// alert ("something wrong")
//     }
// }

// call();

// async function call() {
//     try {
//         var op = await fetch("https://api.thecatapi.com/v1/breeds");
//         var data = await op.json()
//         for (cats of data) {
           
//             const block = document.createElement('div');
//             block.setAttribute("class","fl");

//             block.innerHTML = `
//             <div class="imgs"><img style="height: 200px; width: 270px; object-fit: cover;" class="pic" src="${cats.image.url}"</div>
//             <div class="dtl">
//             <p>Name : ${cats.name}</p>
//             <p>Orgin : ${cats.origin}</p>
//             <p>Description : ${cats.description}</p>
//             </div>
//             `
          
//             document.body.append(block);
//         }
//     }
//     catch {
//         alert("something error")
//     }
// }
// call();

// async function call(){
//     try{
//         var op = await fetch("https://api.thecatapi.com/v1/breeds");
//         var data =await op.json()
//         for(objs of data) {
//             var cont = document.createElement("div");
//             var h = document.createElement("h1");
//             h.innerText = objs.name;
//             var img = document.createElement("img");
//             if(objs.name!="European Burmese" && objs.name!="Malayan")
//             {
//                 img.src=objs.image.url
//             }
//             cont.appendChild(h);
//             cont.appendChild(img);
//             document.body.appendChild(cont);
//         }

//     }
//     catch{
//         alert("something wrong")
//     }
// }
// call();

async function call(){
    try{
        var op = await fetch("https://api.thecatapi.com/v1/breeds");
        var data =await op.json()
        console.log(data);
        var parent = document.getElementById("main")
        for(objs of data) {
            var cont = document.createElement("div");
            cont.setAttribute("class","card")

            var img = document.createElement("img");
            // if(objs.name!="European Burmese")
            // {
            //     if(objs.name!="Malayan"){
            //         img.src=objs.image.url;
            //     }
            // }

            switch(objs.name) {
                case "European Burmese":
                    img.src="https://www.petguide.com/wp-content/uploads/2013/07/european-burmese.jpg";
                  break;
                case "Malayan":
                    img.src="https://www.catbreedselector.com/wp-content/uploads/2016/11/Asian-Cat-Breeds.jpg";
                  break;
                  case "Persian":
                      img.src="https://easyscienceforkids.com/wp-content/uploads/2019/05/Persian-Cat-23-4-1-758x635.jpg";
                    break;
                default:
                    img.src=objs.image.url;
              }


            var h = document.createElement("h4");
            h.innerText = `Name : ${objs.name}`;

            var p = document.createElement("p");
            p.innerText = `Description :  ${objs.description}`;
            // var h = document.createElement("h1");
            // h.innerText = objs.name;
            
            cont.appendChild(img);
            cont.appendChild(h);
            cont.appendChild(p);
            parent.appendChild(cont);
        }

    }
    catch{
        alert("something is wrong")
    }
}
call();
