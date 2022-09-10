var answers=[];
function recordAnswer(qno, ans, nqno) {
    answers[0]=0;
    answers[qno] = ans;
    console.log(answers)
    if (nqno > 0) {
        jQuery('#question .row').removeClass("active");
        jQuery('.q' + nqno).addClass("active");

    }
    else {
        /* Result Calculation:
    If q1, q2, q4, q8, q9, q6 = yes and q3, q5, q7, q10 = yes/no then result 1 
    If q2, q1, a4 = yes and q3, q6, q5, q7, q10 = yes/no and q8, q9 = yes/no then result 2 
    Otherwise show the result 3 */
        
        q1 = answers[1];
        q2 = answers[2];
        q3 = answers[3];
        q4 = answers[4];
        q5 = answers[5];
        q6 = answers[6];
        q7 = answers[7];
        q8 = answers[8];
        q9 = answers[9];
        q10 = answers[10];
        console.log(q1)
        if ((q1==q2==q4==q8==q9==q6==1) && (q3==q5==q7==q10==1||2)) {
            jQuery('#question .row').removeClass("active");
            jQuery('.result1').addClass("active");
        }
        else if((q2==q1==q4==1) && (q3==q6==q5==q7==q10==q8==q9==1||2)){
            jQuery('#question .row').removeClass("active");
            jQuery('.result2').addClass("active");
        }
        else{
            jQuery('#question .row').removeClass("active");
            jQuery('.result3').addClass("active");
        }
    }

}