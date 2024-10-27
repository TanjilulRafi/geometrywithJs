


function claculateParallelogramArea(){
    const base = getInputValue('par-base');
    const height = getInputValue('par-height');
    const b = parseFloat(base.value);
    const h = parseFloat(height.value);
    const area = b * h;
    const parArea = getInputValue('par-area');
    parArea.innerText = area;
}

function getInputValue(id){
    const inputField = document.getElementById(id)
    return inputField;
}