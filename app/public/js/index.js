  

const Site = {
  data() {
    return {
        
      "person": {},

      }
  },
  created() {

      fetch('https://randomuser.me/api/')
      //turns the response into json 
      .then(response => response.json())
      //
      .then( (responseJson) => {
          console.log(responseJson);
          //assigns person to the the first person on random user
          this.person = responseJson.results[0];
      })

      .catch( (err) => {
        console.error(err);
      })

  }
}

Vue.createApp(Site).mount('#randomUser') 