  

const records = {
  data() {
    return {
          records: [],
          selectedRecord: null,
          bookForm: {},
          selectedBook: null
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
          .then((responseJson) => {
              console.log(responseJson);
              this.records = responseJson
          })
          .catch( err => {
              console.error(err)
          })
          .catch((error) => {
            console.error(error);

          });
      },
      postBook(evt) {
        if (this.selectedBook === null) {
            this.postNewBook(evt);
        } else {
            this.postEditBook(evt);
        }
      },
      postNewBook(evt) {
            
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
        }, 
        postEditBook(evt) {
          //this.bookForm.book_id = this.selectedRecord.book_id;
          this.bookForm.book_id = this.selectedBook.book_id;
  
          console.log("Updating!", this.bookForm);
  
          fetch('api/records/update.php', {
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
              this.resetBookForm();
            });
        },
        postDeleteBook(s) {
          if (!confirm("Are you sure you want to delete the book titled "+s.title+"?")) {
            return;
          }
          console.log("Delete!", s);
  
          fetch('api/records/delete.php', {
              method:'POST',
              body: JSON.stringify(s),
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
              this.resetBookForm();
            });
        },
        selectBookToEdit(s) {
            this.selectedBook = s;
            this.bookForm = Object.assign({}, this.selectedBook);
        },
        resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
        }
  },
  created() {
      this.fetchRecordData();
  }
}

Vue.createApp(records).mount('#recordApp');