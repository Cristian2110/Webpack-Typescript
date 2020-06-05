
export class Pelicula{
    
  
    constructor(public nombre:string,public director:string, public estreno:Date,public duracion:number,public familiar:boolean){
     
    }
    
   

    desplegar(){
    

        if(this.familiar){

            console.log( ` ${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.convertirFormato()}, se entrenó en el año ${this.estreno.getFullYear()+1} es apta para toda la familia.`);
            document.body.innerHTML+="<h1>"+`${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.convertirFormato()}, se entrenó en el año ${this.estreno.getFullYear()+1} es apta para toda la familia.`;
         }
         else{
            console.log( `${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.convertirFormato()}, se entrenó en el año ${this.estreno.getFullYear()+1} y es para mayores de 18 años.`);
            
            document.body.innerHTML+="<h1>"+`${this.nombre} fue dirigida por ${this.director} tiene una duración de ${this.convertirFormato()}, se entrenó en el año ${this.estreno.getFullYear()+1} y es para mayores de 18 años.`;
         }

    

         
    }

    convertirFormato():String{

        let hours = Math.floor(this.duracion/ 60);  
        let minutes = this.duracion % 60;
        return hours + ":" + minutes;   

    }

}

    





