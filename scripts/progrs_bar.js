function progressView(){
    let diagramBox = document.querySelectorAll('.diagram.progress');
    diagramBox.forEach((box) => {
        let deg = (360 * box.dataset.percent / 100) + 180;
        if(box.dataset.percent >= 50){
            box.classList.add('over_50');
        }else{
            box.classList.remove('over_50');
        }
        box.querySelector('.piece.right').style.transform = 'rotate('+deg+'deg)';
    });
}

function check_localstorage()
{
   
    div = document.getElementsByClassName("diagram progress");
    
    
        if("root_percents_linux" in localStorage)
            {
                div[0].setAttribute("data-percent", localStorage.root_percents_linux);
            }

            if("root_percents_dev" in localStorage)
            {
                div[1].setAttribute("data-percent", localStorage.root_percents_dev);
            }
           
            if("root_percents_docker" in localStorage)
            {
                div[2].setAttribute("data-percent", localStorage.root_percents_docker);
            }
            progressView();
       
    if(("percents" in localStorage) && ("category" in localStorage))
    {
        category = localStorage.category;
        let  root_percents;
        
        if(category === "Linux")
        {
            if("root_percents_linux" in localStorage)
            {
              
                root_percents =  parseInt(localStorage.root_percents_linux);

            }
            else
            {
                root_percents = div[0].getAttribute("data-percent");
                localStorage.setItem("root_percents_linux", root_percents);
            }
          
            root_percents += parseInt(localStorage.percents);
            if(root_percents > 100)
            {
                div[0].setAttribute("data-percent", "100");
                localStorage.root_percents_linux = "100";
            }
            else if(root_percents < 0) 
            {

                div[0].setAttribute("data-percent", "0");
                localStorage.root_percents_linux = "0";
                
            }
            else
            {
                div[0].setAttribute("data-percent", root_percents.toString());
                localStorage.root_percents_linux = root_percents;
            }
           
          
            localStorage.removeItem('percents');
            localStorage.removeItem('category');
            progressView();
        }
        else if(category == "DevOps")
        {
            if("root_percents_dev" in localStorage)
            {
                root_percents =  parseInt(localStorage.root_percents_dev);
            }
            else
            {
               
                root_percents = parseInt(div[1].getAttribute("data-percent"));
                localStorage.setItem("root_percents_dev", root_percents);
            }
           
        
            root_percents += parseInt(localStorage.percents);
            if(root_percents > 100)
            {
                div[1].setAttribute("data-percent", "100");
                localStorage.root_percents_dev = "100";
            }
            else if(root_percents < 0) 
            {

                div[1].setAttribute("data-percent", "0");
                localStorage.root_percents_dev = "0";
                
            }
            else 
            {
                div[1].setAttribute("data-percent", root_percents.toString());
                localStorage.root_percents_dev = root_percents;
            }
            localStorage.removeItem('percents');
            localStorage.removeItem('category');
            progressView();
        }
        else if(category == "Docker")
        {   
            if("root_percents_docker" in localStorage)
            {
                root_percents =  parseInt(localStorage.root_percents_docker);
            }
            else
            {
                root_percents = parseInt(div[2].getAttribute("data-percent"));
                localStorage.setItem("root_percents_docker", root_percents);
            }
          
            root_percents += parseInt(localStorage.percents);
            if(root_percents > 100)
            {
                div[2].setAttribute("data-percent", "100");
                localStorage.root_percents_docker = "100";
            }
            else if(root_percents < 0) 
            {

                div[2].setAttribute("data-percent", "0");
                localStorage.root_percents_docker = "0";
                
            }
            else 
            {
                div[2].setAttribute("data-percent", root_percents.toString());
                localStorage.root_percents_docker = root_percents;
            }
            localStorage.removeItem('percents');
            localStorage.removeItem('category');
            progressView();
        }
    }
}