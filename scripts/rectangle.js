function claculateRectangleArea(){
    const rectWidth = document.getElementById('rect-width');
    const rectLength = document.getElementById('rect-length')
    const width = parseFloat(rectWidth.value);
    const length = parseFloat(rectLength.value);
    const rectangleArea = width * length ;
    console.log(rectangleArea)
}