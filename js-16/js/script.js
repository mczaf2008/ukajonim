$(function () {
    
     let wrapTest = $('.wrapp');
    
    class tabTest{
        constructor(test){
            $(test).find('.tab-content').not('.active').hide();
            $(test).find('.tab-item').click(function() {
                $(test).find('.tab-item').removeClass('active').eq($(this).index()).addClass('active');
                $(test).find('.tab-content').hide().eq($(this).index()).slideDown(800);
            });
        }
    }
    
    for(let i of wrapTest){
        i = new  tabTest(i);
    } 
    
    
    class tab {
        constructor(test1){
            $(test1).find('.text').not(':nth(0)').hide();
            $(test1).find('.logo').click(function() {
                $(test1).find(this).next().slideToggle(500);
               $(test1).find('.text').not($(this).next()).slideUp(500) 
            })
        }
    }
    
    
    let wrapper = $('.wrapper');
    for(let i of wrapper){
        i = new tab(i);
    }
   
})