
// let input=document.getElementsByClassName("words");
// let char=document.getElementById("char");
// let word=document.getElementById("word");


//     input.addEvenListener('input',()=>{
//         char.innerHTML=input.value.length;
//         let textArea=input.value.trim();
//         word.innerHTML=textArea.split(/\s+/).filter((item)=>item).length;
//     })
let TextArea=document.getElementById('textArea')
let character=document.getElementById('char');
let word=document.getElementById('word')
let button=document.getElementById('btn')
TextArea.addEventListener("input",()=>{
    button.addEventListener('click',()=>{
    character.innerHTML=TextArea.value.length;
    let text=TextArea.value.trim();
    word.innerHTML=text.split(/\s+/g).filter((value)=>value).length
})
})





