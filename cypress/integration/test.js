describe('task_answer', function() {
     
    it('search_Ticket_task', function() {
       
       cy.viewport(1536, 721)
    
       cy.visit('https://www.alibaba.ir')
       
       cy.contains('مبدا (شهر)').click()
       
       cy.contains('تهران').click()
       
       cy.contains('مقصد (شهر)').click().type('مشهد')
       
       cy.contains('مشهد').click()
      
       cy.contains('تاریخ رفت').click()
      
       cy.wait(1000)
       
       cy.contains('16 ').click()

       cy.contains(' تایید ').click()

       cy.wait(1000)
       
       cy.contains('تاریخ برگشت').click()
       
       cy.contains('تاریخ برگشت').click()

       cy.wait(1000)

       cy.contains('22 ').click()

       cy.contains(' تایید ').click()

       cy.contains('مسافران').click()
      
       for(let n = 0; n < 4; n ++){
       
       cy.get('.is-secondary').first().click()
      
        }

       cy.get('form').contains('جستجو').click()
       cy.wait(2000)
    //    expect(myVar).to.exist
    //    expect($el).to.be.visible
        var md ='متاسفانه برای مسیر مورد نظر شما در این تاریخ پروازی وجود ندارد.'
       
       if (md == document.getElementsByClassName('text-grays-700 font-bold text-4 md:mb-4 mb-2 px-3').text){
        
        cy.go('back')
        
        cy.contains('تاریخ رفت').click()
       
        cy.wait(1000)
       
        cy.contains('17 ').click()
       
        cy.get('form').contains('جستجو').click()
       
        cy.wait(2000)
       
        cy.get('footer').scrollIntoView({ duration: 5000 })

        }
        else {
        cy.wait(5000)
        cy.get('footer').scrollIntoView({ duration: 5000 })
        cy.contains('درباره ما').click()
        }
        
    })
   
   })
   