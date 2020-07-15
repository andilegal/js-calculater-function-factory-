(function(){
  function createCalculator(){
    return {
      display: document.querySelector('.display'),  
      btnClick: document.querySelector('.btn-clear'),
      invalid: document.querySelector('div'),
      
      init(){
        this.clickButtons();
        this.pressEnter()
      },

      pressEnter(){
        this.display.addEventListener('keyup',(e)=>{
          if(e.keyCode === 13){
            this.operation()
          }
        })
      },

      clearDisplay(){
        this.display.focus()
        this.display.value = ''
      },
      alertInvalid(){
        this.invalid.innerText = "invalid account"
        this.clearDisplay()
      },
      operation(){
        let account = this.display.value
        try{
          account = eval(account)
          if(!account){
           this.alertInvalid()
            return
          }
          this.display.value = String(account)  
        }catch(err){
          this.alertInvalid()
        }
      },
      oneDelete(){
        this.display.value = this.display.value.slice(0, -1)
      },
      clickButtons(){
        document.addEventListener('click', (e)=>{
          const el = e.target
          if(el.classList.contains('btn-num')){
            this.btnDisplay(el.innerText)
          }
          if(el.classList.contains('btn-clear')){
            this.clearDisplay()
          }
          if(el.classList.contains('btn-del')){
            this.oneDelete()
          }
          if(el.classList.contains('btn-equal')){
            this.operation()
          }
          this.display.focus()
        })
      },
      btnDisplay(value){
        this.display.value += value
      }
    
    
    }
  }

  const calculator = createCalculator()
  calculator.init()

})()