  

const Site = {
  data() {
    return {
        
      "person": {},

      }
  },
  computed: {
    prettyBirthday() {
        return dayjs(this.person.dob.date)
        .format('MMM. D YYYY')
    }
},
  created() {
    this.fetchUser(); 
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( (responseJson) => {
          this.person = responseJson.results[0];
      })
      .catch( (err) => {
          console.error(err);
      })
      console.log("B");
  },

  onRefresh(event) {
      //event.preventDefault();
      this.fetchUser();
  }
  }
}

Vue.createApp(Site).mount('#randomUser') 