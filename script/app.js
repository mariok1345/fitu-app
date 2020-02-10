const app = new Vue(
  {
      el:'#app',
      data:
      {
            title:'esto es vue prueba',
            name:'',
            type:'',
            color:'',
            breed:'',
            gender:'',
            aged:'',
            created:'',
            pest:[]
      },
      methods:{
          crearPest:function(){
            this.pest.push({
              id:+ new Date(),
              name:this.name,
              type:this.type,
              color:this.color,
              breed:this.breed,
              gender:this.gender,
              aged:this.aged,
              created:this.created
            });
            localStorage.setItem('pest-vue',JSON.stringify(this.pest));

          },
          eliminar:function(index){
            this.pest.splice(index,1);
            localStorage.setItem('pest-vue',JSON.stringify(this.pest));
          }
      },
      created:function(){
        let datosDB =JSON.parse(localStorage.getItem('pest-vue'));
        if(datosDB === null)
        {
          this.pest=[];
        }
        else
        {
          this.pest=datosDB;
        }
      }

  }
)
