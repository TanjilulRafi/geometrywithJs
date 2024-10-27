function claculateTriangleArea(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleHeight = document.getElementById('triangle-height')
    const base = parseFloat(triangleBase.value);
    const height = parseFloat(triangleHeight.value);
    const triangleArea = 0.5* base * height ;
    console.log(triangleArea)
    const triarea = document.getElementById('tri-area');
    triarea.innerText = triangleArea;
}