$(function(){
    let dayOutcomeInDom = document.querySelector('#dayOfWeek')
    let akanOutcomeInDom = document.querySelector('#akanName');
    
    // Formulae to calculate day of Week Takes in century,year,month,and day parameters.
    // March = 1, December = 10 January = 11, February 12;
    let dayCalculator = (c,y,mon,d)=>{
        let m;
        if(mon>=3){
            m = mon-2;
        }else if(mon == 1){
            m = 11
        }else{
            m = 12
        }
    
        return Math.abs((d+ Math.floor((2.6*m)-0.2)-(2*c)+y+Math.floor(y/4)+Math.floor(c/4))%7);
    }
    function adderror(selector){
        $(selector).addClass('error');
        $(selector).next().css({display:"block"})
    }
    
    function removeError(selector){
        $(selector).removeClass('error')
        $(selector).next().css({display:"none"})
    }
    function checkwholeFormValidity(){
        if(validDay && validMonth && validYear && validGender){
            
            $('input[type=submit]').removeAttr('disabled');
        }else{
            $('input[type=submit]').attr('disabled','disabled');
        }
    }