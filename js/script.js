

document.getElementById("promedio").addEventListener("click", mostrarPromedio);
document.getElementById("mayor").addEventListener("click", mostrarNotaMayor);
document.getElementById("menor").addEventListener("click", mostrarNotaMenor);



      function mostrarPromedio() {
        if (localStorage.length>0){
          var out = 0;
          var i;
          for (var i=0; i<localStorage.length; i++) {
            var clave =localStorage.key(i)
            var estudiante = $.parseJSON(localStorage.getItem(clave))
             out=out+parseFloat(estudiante.nota);
          }
          out=out/(localStorage.length+1);
          alert(out);
        } else {
          alert ("No hay estudiantes registrados")
        }
      }

  function mostrarNotaMayor() {
      var out = "";
      var clave;
      var estudiante;
      var nota;
      var indice;
      if (localStorage.length>0){
        clave =localStorage.key(0)
        indice = clave
        estudiante = $.parseJSON(localStorage.getItem(clave))
        nota = parseFloat(estudiante.nota);
        for(i = 0; i < localStorage.length; i++) {
           clave =localStorage.key(i)
           estudiante = $.parseJSON(localStorage.getItem(clave))
           if(nota < parseFloat(estudiante.nota)){
             nota=parseFloat(estudiante.nota);
             indice = clave
           }
        }
        estudiante = $.parseJSON(localStorage.getItem(indice))
        out="Id:"+estudiante.id+" - "+"Codigo:"+estudiante.codigo+" - "+" Nombre:"+estudiante.nombre+" - Nota:"+estudiante.nota;
        alert(out);
      } else {
        alert ("No hay estudiantes registrados")
      }


  }

  function mostrarNotaMenor() {
      var out = "";
      var clave;
      var estudiante;
      var nota;
      var indice
      if (localStorage.length>0){
        clave =localStorage.key(0)
        indice = clave
        estudiante = $.parseJSON(localStorage.getItem(clave))
        nota = parseFloat(estudiante.nota);
        for(i = 0; i < localStorage.length; i++) {
          clave =localStorage.key(i)
          estudiante = $.parseJSON(localStorage.getItem(clave))
           if(nota > parseFloat(estudiante.nota)){
             nota=parseFloat(estudiante.nota);
             indice = clave
           }
        }
        estudiante = $.parseJSON(localStorage.getItem(indice))
        out="Id:"+estudiante.codigo+" - "+"Codigo:"+estudiante.codigo+" - "+" Nombre:"+estudiante.nombre+" - Nota:"+estudiante.nota;
        alert(out);
      } else {
        alert ("No hay estudiantes registrados")
      }


  }
