$(document).ready(function(){
  $('#sendIt').click(function(){
    let input = $('#userInput').val();
    let left = "";
    let right = "";
    let imageArray = [];
    let count = 0;

    function clearDivs(){
        $("#left").html(" ");
        $("#right").html(" ");
      };

    $(input).find('img').each(function(index, value){
      let newValues = {};
      console.log(value);
      if(value.attributes.alt === undefined){
        newValues = {
          src: value.attributes.src.value,
          alt: false
        }
      }else{
        newValues = {
          src: value.attributes.src.value,
          alt: value.attributes.alt.textContent
        }
      }
      imageArray.push(newValues);
    });

    $(imageArray).each(function(index, value){
      clearDivs();
      if(value.alt == false){
        if(count %2 === 0){
          right += '<div class="row">';
        }
        right += '<div class="col-sm-6 card">';
        right += '<span class="image"><img src="'+value.src+'"></span>'+ '<span class="alttag">Alt tag: "'+value.alt+'"</span>';
        right += '</div>';
        count++;
        if(count %2 === 2){
          right += '</div>';
        }
      }else{
        if(count %2 == 0){
          left += '<div class="row">';
        }
        left += '<div class="col-sm-6 card">';
        left += '<span class="image"><img src="'+value.src+'"></span>'+ '<span class="alttag">Alt tag: "'+value.alt+'"</span>';
        left += '</div>';
        count++
        if(count %2 === 2){
          left += '</div>';
        }
      }
      $('#left').html(left);
      $('#right').html(right);
    });
  });
});
