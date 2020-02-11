const app = new Vue({
  el: '#app',
  data: {
    title: 'esto es vue prueba',
    name: '',
    type: '',
    color: '',
    breed: '',
    gender: '',
    aged: '',
    created: '',
    idActualizar: -1,
    formActualizar: false,
    // Input nombre dentro del formulario de actualizar
    nameActualizar: '',
    pest: [],
    editInput: {
      name: '',
      type: '',
      color: '',
      breed: '',
      gender: '',
      aged: '',
      created: '',
    }
  },
  methods: {
    crearPest: function() {
      this.pest.push({
        name: this.name,
        type: this.type,
        color: this.color,
        breed: this.breed,
        gender: this.gender,
        aged: this.aged,
        created: this.created
      });
      localStorage.setItem('pest-vue', JSON.stringify(this.pest));

    },
    eliminar: function(index) {
      this.pest.splice(index, 1);
      localStorage.setItem('pest-vue', JSON.stringify(this.pest));
    },
    edit: function(index) {
      this.editInput = this.pest[index];
      console.log(this.editInput);
      this.pest.splice(index, 1);
    },
    update: function() {
      // this.persons.push(this.editInput);
      this.pest.push({
        name: this.editInput.name,
        type: this.editInput.type,
        color: this.editInput.color,
        breed: this.editInput.breed,
        gender: this.editInput.gender,
        aged: this.editInput.aged,
        created: this.editInput.created
      });
      for (var key in this.editInput) {
        this.editInput[key] = '';
      }
      this.pests.sort(ordonner);
    }
  },

  created: function() {
    let datosDB = JSON.parse(localStorage.getItem('pest-vue'));
    if (datosDB === null) {
      this.pest = [];
    } else {
      this.pest = datosDB;
    }
  }

})
//function to handle data edition
// edit: function(index) {
//   this.editInput = this.persons[index];
//   console.log(this.editInput);
//   this.persons.splice(index, 1);
// },
