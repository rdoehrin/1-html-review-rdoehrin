  

const Records = {
  data() {
    return {
          "records": [],
          "selectedRecord": null,
          "bookForm": {}
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
      postNewBook(evt) {
        //this.bookForm.studentId = this.selectedStudent.id;        
        
        console.log("Posting!", this.bookForm);
      
        fetch('api/records/create.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.records = json;
            
            // reset the form
            this.bookForm = {};
          });
        } 
  },
  created() {
      this.fetchRecordData();
  }
}

Vue.createApp(Records).mount('#recordApp');