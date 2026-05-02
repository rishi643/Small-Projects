
const op=document.querySelector('#oKI');
const hui= document.getElementsByClassName('emptybox');

op.addEventListener( 'dragstart', (e)=>{
console.log("start")
e.target.className += ' hold';
setTimeout(() => {
    e.target.className = 'hide';
    
},0);
}

)
op.addEventListener('dragend',()=>{
    console.log("end")
})

for( j of hui){
    j.addEventListener('dragover',(e)=>{
        console.log("dragover");
        e.preventDefault();
    })  
    j.addEventListener('dragenter',(e)=>{
        console.log("dragenter");
        e.target.className += ' dashed'

    })  
    j.addEventListener('dragleave',(e)=>{
        console.log("draleave");
        e.target.className += ' empty';
       

    })  
    j.addEventListener('drop',(e)=>{
        console.log("drop");
  e.target.append(op)
    })  

}