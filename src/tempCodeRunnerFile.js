       const randomArray = (randomArr, length) => {
        let random = Math.floor(Math.random() * length)
    
        if(randomArr.length === 0) {
          randomArr.push(random)
        }
        if(randomArr.length >= length) return ;
        
        for(let x = 0; x < randomArr.length; x++) {
          if(randomArr[x] === random) {
            randomArray(randomArr, length)
          }
          
        }
        randomArr.push(random)
        randomArray(randomArr, length)
    
        return randomArr.slice(0,length)
      }

      let randomTest = randomArray([], 9)
      console.log(randomTest);