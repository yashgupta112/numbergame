

  function output() {

  let ans = 0;
    if($('#c1').is(':checked')) {
      ans+=1;
    }
    if($('#c2').is(':checked')) {
      ans+=2;
    }
    if($('#c3').is(':checked')) {
      ans+=4;
    }
    if($('#c4').is(':checked')) {
      ans+=8;
    }
    if($('#c5').is(':checked')) {
      ans+=16;
    }
    if($('#c6').is(':checked')) {
      ans+=32;
    }
    if($('#c7').is(':checked')) {
      ans+=64;
    }

  alert("Your number is " + ans);
}
