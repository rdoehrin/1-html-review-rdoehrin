  

const Records = {
  data() {
    return {
          "records": [],
          "selectedRecord": null
      }
  },
  computed: {
      // prettyBirthday() {
      //     return dayjs(this.person.dob.date)
      //     .format('D MMM YYYY');
      // }
  },
  methods: {
      selectRecord(s) {
          console.log("Clicked", s);
          if (this.selectedRecord == s) {
              return;
          }

          this.selectedRecord = s;
      },
      fetchRecordData() {
          fetch('/api/records/')
          .then(response => response.json())
          .then((parsedJson) => {
              console.log(parsedJson);
              this.records = parsedJson
          })
          .catch( err => {
              console.error(err)
          })
      },
  },
  created() {
      this.fetchRecordData();
  }
}

Vue.createApp(Records).mount('#recordApp');