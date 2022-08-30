!function(e){
    var t = {};
    function n(s){
        if(t[s])
        return t[s].exports;
        var o = t[s] = {i:s,l:!1,exports:{}};
        return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e,t,s){
        n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})
    },
    n.r = function(e){
        "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),
        Object.defineProperty(e,"__esModule",{value:!0})
    },
    n.t = function(e,t){
        if(1&t&&(e = n(e)),8&t)
            return e;
        if(4&t&&"object" == typeof e&&e&&e.__esModule)
            return e;var s = Object.create(null);
        if(n.r(s),
            Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)
        for(var o in e)n.d(s,o,function(t){
            return e[t]
        }
        .bind(null,o));
            return s
    },
    n.n=function(e){
        var t=e&&e.__esModule?function(){
            return e.default}:function(){
            return e
        };
            return n.d(t,"a",t),t
    },
    n.o = function(e,t){
        return Object.prototype.hasOwnProperty.call(e,t)
    },
    n.p = "",
    n(n.s = 0)
}
([function(e,t,n){
        "use strict";
    n.r(t);
    class s{constructor(e){this.onSubmit=e}

    Build(){
        let e = document.createElement("form");
        return e.innerHTML = ` 
            <div class="form-group">            
                <label for ="authorName">Author</label>
                <input type ="name" class="form-control" name="authorName">           
            </div>  
            <div class ="form-group"> 
                <label for ="postText">Text</label>                
                <textarea name ="postText" id="postText" class="form-control"></textarea>\n            
            </div>            
            <div class ="form-group">               
                <button type ="submit" class="form-control"> Send Post </button>           
            </div> ` ,
        this.AddEvents(e),e
    }

    AddEvents(e){
        e.querySelector('[type ="submit"]').addEventListener("click",t=>{
            if(t.preventDefault(),
            !this.ValidateForm(e))
        return void alert("please, fillout all the fields");
        let n =this.GetPost(e);
        this.onSubmit(n),
        e.reset()
    })}

    ValidateForm(e){
        let t = Array.from(e.querySelectorAll("[name]")),n=!0;
        return t.forEach(e =>{e.classList.remove("error")}),
        t.forEach(e =>{"" ===e.value&&(n=!1,e.classList.add("error"))}),n
    }

    GetPost(e){
        let t = Array.from(e.querySelectorAll("[name]")),n={};
        return t.forEach(e =>{n[e.name]=e.value}),n
    }}
    class o {
        constructor(e){this.likesCount=0,this.el=null,this.onClick=e}

    Build(){
        let e = document.createElement("div");
        return e.classList.add("social","d-flex","justify-content-between","mb-3"),
        e.innerHTML =`
            <a class="likes">         
                <i class="far fa-heart"></i>               
                <span class="counter"> Likes ${this.likesCount} </span>
            </a>       `,
        this.AddEvents(e),
        this.el=e,
        this.el
    }

    AddEvents(e){
        e.querySelector(".likes").addEventListener("click",()=>{
        e.querySelector(".counter").innerHTML=`Likes: ${++this.likesCount}`,this.onClick(this.likesCount)
    })}

    SetCount(e){
        this.el.querySelector(".counter").innerHTML=`Likes: ${e}`,this.likesCount=e
    }}

    class r {constructor(e){this.submitComment=e}

    Build(){
        let e = document.createElement("div");
        return e.classList.add("form-group","comment-form"),
        e.innerHTML= ` 
            <input class="form-control mb-3" name="commentAuthor" type="text" id="commentAuthor"> 
                <textarea class="form-control mb-3" name="commentText"></textarea>           
            <button type="submit" class="form-control"> Send Post </button> ` ,

    this.AddEvents(e),e
    }
    AddEvents(e){
        e.querySelector("button").addEventListener("click",()=>{
            if(!this.ValidateForm(e))
            return void alert("please tell me who you are");
        let t=this.GetComment(e);this.submitComment(t),this.ResetForm(e)
    })}

    GetComment(e){
        let t={};
        return Array.from(e.querySelectorAll("[name]"))
        .forEach(e=>{t[e.name]=e.value}),t
    }
    ResetForm(e){
        Array.from(e.querySelectorAll("[name]")).forEach(e=>{e.value=""})
    }

    ValidateForm(e){
        let t=Array.from(e.querySelectorAll("[name]")),
        n=!0;
        return t.forEach(e=>{e.classList.remove("error")}),
        t.forEach(e=>{""===e.value&&(n=!1,e.classList.add("error"))}),n
    }}

    class i {
        constructor(e){
            this.id=e.id||(new Date).getTime(),this.data=e,this.comments=[]
        }
        
    Build(){
        let e=document.createElement("div");
        e.classList.add("card","mb-3");
        let{authorName:t,postText:n}=this.data,
        s=new Date,
        i=String(s.getDate()).padStart(2,"0"),
        l=String(s.getMonth()+1).padStart(2,"0"),
        c=s.getFullYear();s=l+"/"+i+"/"+c;
        let d=new o(e=>{a.UpdatePostLikes(this.id,e)});
        d.Build(),this.data.likesCount&&d.SetCount(this.data.likesCount),
        e.innerHTML=`
            <div class="card-body" data-id=${this.id}>               
            <div class="info d-flex justify-content-between ">                  
                <span>${t}</span>                 
                <span>${s}</span>              
            </div>               
            <img src="" alt="">              
            <p class="card-text">${n}</p>            
            <div class="social d-flex justify-content-between">
                <span class='likes-container'></span>                    
                <div class="comments">                        
                <span class="comments-count">Comments (${this.comments.length})</span>                        
                <a class="_commentsBtn" href="#">Write a comment</a>                   
                </div>               
            </div>
            <div class="comment-block">                
            </div>                            
            </div>       `,

        e.querySelector(".likes-container").appendChild(d.Build());
        let m=new r(e=>{
            this.AddComment(e,!0),
            this.RenderComments()
        });
        return e.querySelector(".card-body").appendChild(m.Build()),
        e.querySelector("._commentsBtn").addEventListener("click",()=>{e.querySelector(".comment-form").classList.toggle("show")}),
        this.el=e,e
    }

    AddComment(e,t){
        let n=document.createElement("div");
        n.classList.add("comment","mb-3"),
        n.innerHTML=`           
            <span>Author: ${e.commentAuthor}</span>           
            <p>${e.commentText}</p>\n        `,

        t&&a.AddPostComment(this.id,{author:e.commentAuthor,text:e.commentText}),
        this.comments.push(n),this.UpdateCommentsCounter(),this.RenderComments()
    }

    UpdateCommentsCounter(){
        this.el.querySelector(".comments-count").innerHTML=`Comments (${this.comments.length})`
    }

    RenderComments(){
        let e=this.el.querySelector(".comment-block");
        this.comments.forEach(t=>{e.appendChild(t)})
    }}
    n.d(t,"default",function(){return a});

    class a{
        constructor(e){
            this.el=e,this.el.classList.add("container"),
            this.Init(),this.LoadSavedData()
        }
        Init(){
            let e=document.createElement("div");
            e.classList.add("row"),
            this.el.appendChild(e),
            this.el.querySelector(".row").append(this.PostsContainer(),
            this.FormContainer())
    }

    LoadSavedData(){
        a.GetSavedPosts().forEach(e=>{
            let t=new i(e);
            this.AddPost(t,!1),e.comments.forEach(e=>{t.AddComment({commentAuthor:e.author,commentText:e.text},!1)})
        })
    }

    PostsContainer(){
        let e=document.createElement("div");
        e.classList.add("left");
        let t=document.createElement("h1");
        return t.innerText="News Feed",e.appendChild(t),e
    }

    AddPost(e,t){
        let n=this.el.querySelector(".left");
            if(t){let t=a.GetSavedPosts();
                t.push({id:e.id,authorName:e.data.authorName,postText:e.data.postText,comments:[]}),
                localStorage.setItem("posts",JSON.stringify(t))
            }
        n.appendChild(e.Build())
    }

    FormContainer(){
        let e=document.createElement("div");
        e.classList.add("right");
        let t=document.createElement("h1");
        t.innerHTML="Add post";
        let n=document.createElement("div");
        n.classList.add("card","card-body"),e.appendChild(t);
        let o=new s(e=>{let t=new i(e);this.AddPost(t,!0)});
        return n.appendChild(o.Build()),e.appendChild(n),e
    }

    static UpdatePostLikes(e,t){
        let n=a.GetSavedPosts();
        n.forEach(n=>{n.id===e&&(n.likesCount=t)}),
        localStorage.setItem("posts",JSON.stringify(n))
    }
            
    static GetSavedPosts(){
        let e=localStorage.getItem("posts");
        return e?JSON.parse(e):[]
    }
            
    static AddPostComment(e,t){
        let n=a.GetSavedPosts();
        n.forEach(n=>{n.id===e&&n.comments.push(t)}),
        localStorage.setItem("posts",JSON.stringify(n))
    }}

    document.addEventListener("DOMContentLoaded",()=>{new a(document.querySelector('[data-id="App"]'))})
}]);