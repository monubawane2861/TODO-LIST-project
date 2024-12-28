
      let todomainlist = document.getElementById("todomainlist");

      let userInput = document.getElementById("userInput")

// this is array inside object...
      // let arrayobj = [

      //   {
      //     title: "Html",
      //     id: 1

      //   },

      //   {

      //     title: "Css",
      //     id: 2

      //   }
      // ]


      function onGetParsedtodo(){
      
                                        
      let newitems = localStorage.getItem("mytodolist");

      if(newitems === null){

         return [];

      }

      else{

        let parsetodo = JSON.parse(newitems);

        return parsetodo;
      }

      }

      let arrayobj = onGetParsedtodo();





      

      function onAppendandClass(todo){

                                 
      let checkboxid = "mycheck" +  todo.id;

      let tittleid ="mytit" + todo.id;

      let todoid = "todo" + todo.id;



      let listitem = document.createElement("li");

      listitem.classList.add("list-item");

      listitem.id = todoid;

      todomainlist.appendChild(listitem);



      let checkboxitem = document.createElement("input");

      checkboxitem.type = "checkbox";

      checkboxitem.id =checkboxid;

      if(todo.isChecked === true){

        checkboxitem.checked = true;
      }

      checkboxitem.onclick = function(){

      
        onLineThrough(checkboxid, tittleid, todoid)
      }

      listitem.appendChild(checkboxitem);




      let labelitem = document.createElement("label");

      labelitem.classList.add("label-item");

      labelitem.htmlFor =checkboxid;

      listitem.appendChild(labelitem);



      let titleitem = document.createElement("h4");
                            
      titleitem.textContent = todo.title

      titleitem.id = tittleid;

      if(todo.isChecked === true){

        titleitem.classList.add("checkedit");

      }

      labelitem.appendChild(titleitem);



      let deleteitem = document.createElement("button");

      deleteitem.classList.add("button-item");

      deleteitem.onclick = function(){

        onDeletebutton(todoid);

      }

      labelitem.appendChild(deleteitem);


      
      let trashitem = document.createElement("i");

      trashitem.classList.add("fa-solid","fa-trash");

      deleteitem.appendChild(trashitem);



      }

      for(each of arrayobj){

        onAppendandClass(each);

      }


      function onAddButton(){

        

        let date = new Date();

     
        let uniquedId = Math.ceil(Math.random()*date.getTime());


       

        let newtodo = {

          title: userInput.value,

     
          id: uniquedId,     

          isChecked: false
       
        }

        if(userInput.value === ""){
          
          alert("please enter valid input");

        }

        else{

       
          onAppendandClass(newtodo);

          arrayobj.push(newtodo);

          userInput.value= "";

        }

      }


      function onLineThrough(checkboxid, tittleid, todoid){

        let checkboxitem = document.getElementById(checkboxid);

        let titleitem = document.getElementById(tittleid);

        if(checkboxitem.checked === true){

           titleitem.classList.add("checkedit");
        }

        else{

          titleitem.classList.remove("checkedit");


        }


        let newslice = todoid.slice(4);


        let index  = arrayobj.findIndex((each)=>each.id == newslice);

        console.log(index)


        for(i = 0; i < arrayobj.length; i++){

          console.log(arrayobj[i])

           if(index === i){

            if(arrayobj[i].isChecked === false){

              arrayobj[i].isChecked = true;
           }

           else{

            arrayobj[i].isChecked = false;

           }
        }

      }

    }
      function onDeletebutton(todoid){

        let mytodo = document.getElementById(todoid);

      
        todomainlist.removeChild(mytodo);

        
        let slicetodo = todoid.slice(4);
        
        let index = arrayobj.findIndex((each)=>each.id == slicetodo);

        console.log(index);

        arrayobj.splice(index,1);

      }


      function onSaveItems(){

           let stringitem = JSON.stringify(arrayobj);

           localStorage.setItem("mytodolist",stringitem);


      }

