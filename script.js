$(document).ready(function(){

  $('#sendIt').click(function(){
    let input = $('#userInput').val();
    let output = $('#output').html();
    let imageArray = [];

    $(input).find('img').each(function(index){
      var image = $(this).attr('src');
      var altTag = $(this).attr('alt');
      imageArray.push(altTag, image);
      // console.log(image);
    });

    // $(input).find('img').each(function(index, value){
    //   let testImg = $(value).attr('img');
    //   // let strg = value.substr("<", ">");
    //   console.log(testImg);
    //   imageArray.push(value);
    //
    //   // let altTag = input.match(/\alt=(["'])(?:(?=(\\?))\2.)*?\1/g);
    //   // console.log(altTag);
    // });

    console.log(imageArray);

  });


});
