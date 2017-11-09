$(document).ready(function(){
  $('#sendIt').click(function(){
    let input = $('#userInput').val();
    let output = "";
    let imageArray = [];
    let count = 0;

    function clearDivs(){
        $("#output").html(" ");
      };

    $(input).find('img').each(function(index, value){
      let newValues = {};
      let values = value.attributes;
      $(values).each(function(index, value){
        newValues = {
          src: value.src,
          alt: value.alt
        }
      });
      if(value.attributes.alt === undefined){
        return;
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
      if(count %3 === 0){
        output += '<div class="row">';
      }
      output += '<div class="col-sm-4 card">';
      output += '<span class="image"><img src="'+value.src+'"></span>'+ '<span class="alttag">Alt tag: "'+value.alt+'"</span>';
      output += '</div>';

      count++;
      if(count %3 === 0){
        output += '</div>';
      }
      $('#output').html(output);
    });
  });
});
