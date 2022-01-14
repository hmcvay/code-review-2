$(document).ready(function() {
  $("button#submitButton").click(function(event){
    const answer1 = parseInt($("select#firstQuestion").val());
    const answer2 = parseInt($("select#secondQuestion").val());
    const answer3 = parseInt($("select#thirdQuestion").val());
    const answer4 = parseInt($("select#fourthQuestion").val());
    const answer5 = parseInt($("select#fifthQuestion").val());

    const total = answer1 + answer2 + answer3 + answer4 + answer5;

    if (total < 6) {
      $("#result1").show();
    } else if (total > 6){
      $("#result2").show();
    }
    if (total === 12) {
      $("#result3").show();
    }
    

  }
)})

