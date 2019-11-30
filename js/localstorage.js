function editarEstudiante (id){
  var estudiante;
  for (var i=0; i<localStorage.length; i++){
    var clave = localStorage.key(i)
    if(clave==id){
      estudiante = $.parseJSON(localStorage.getItem(clave))
      $("#id").val(estudiante.id)
      $("#codigo").val(estudiante.codigo)
      $("#nombre").val(estudiante.nombre)
      $("#nota").val(estudiante.nota)
    }
  }
}

function listarEstudiante(){
  var tabla = ""
  var parrafo1 = $("#p1")
  tabla += '<table id="contenido" border = "1">'
  tabla += '<tr>'
  tabla += '<th>ID</th>'
  tabla += '<th>Codigo</th>'
  tabla += '<th>Nombre</th>'
  tabla += '<th>Nota</th>'
  tabla += '<th>Editar</th>'
  tabla += '<th>Eliminar</th>'
  tabla += '</tr>'

  for (var i=0; i<localStorage.length; i++){
    var clave =localStorage.key(i)
    var estudiante = $.parseJSON(localStorage.getItem(clave))

    tabla += '<tr>'
    tabla += '<td>'+estudiante.id+'</td>'
    tabla += '<td>'+estudiante.codigo+'</td>'
    tabla += '<td>'+estudiante.nombre+'</td>'
    tabla += '<td>'+estudiante.nota+'</td>'
    tabla += '<td><button onclick="editarEstudiante(\''+estudiante.id+'\');">Editar</button></td>'
    tabla += '<td><button onclick="eliminarEstudiante(\''+estudiante.id+'\');">Borrar</button></td>'
    tabla += '</tr>'
  }

  tabla += '</table>'
  $(parrafo1).html(tabla)
}

function eliminarEstudiante(id){
  localStorage.removeItem(id)
  listarEstudiante()
  restablecer()
}

$(document).ready(function(){
  var contador
  calculaID()

  $("#id").val(contador);

  $("#registrar").click(function(){
    var id = $("#id").val()
    var codigo = $("#codigo").val()
    var nombre = $("#nombre").val()
    var nota = $("#nota").val()

    var estudiante = {
      id:id,
      codigo:codigo,
      nombre:nombre,
      nota:nota
    }

    localStorage.setItem(id,JSON.stringify(estudiante))
    listarEstudiante()
    restablecer()
  })

  function calculaID(){
    var clave;
    var estudiante;
    var id;
    if (localStorage.length>0){
      clave =localStorage.key(0)
      estudiante = $.parseJSON(localStorage.getItem(clave))
      id = parseFloat(estudiante.id);
      for(i = 0; i < localStorage.length; i++) {
         clave =localStorage.key(i)
         estudiante = $.parseJSON(localStorage.getItem(clave))
         if(id < parseFloat(estudiante.id)){
           id=parseFloat(estudiante.id);
         }
      }
      contador=id+1
    } else {
      contador=0
    }
  }

  function restablecer(){
    calculaID()
    $("#id").val(contador)
    $("#codigo").val("")
    $("#nombre").val("")
    $("#nota").val("")
  }

  listarEstudiante()

})
