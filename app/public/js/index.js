  

const Offer = {
  data() {
    return {
        
      "person": {},
      "offers": [
              {
                  "id": 1,
                  "name": "Janet Doe",
                  "salary": 120000,
                  "bonus": 9000,
                  "company":"EY",
                  "offerDate": "2021-09-08"
              },
              {
                  "id": 2,
                  "name": "Jordan Doe",
                  "salary": 80000,
                  "bonus": 2000,
                  "company":"IU",
                  "offerDate": "2021-08-09"
              }
          ]
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

Vue.createApp(Offer).mount('#offerApp') 