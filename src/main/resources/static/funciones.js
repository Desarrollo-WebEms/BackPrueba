function eliminar(id) {
	swal({
	  title: "Esta seguro de eliminarlo?",
	  text: "Una vez eliminado, no podrá recuperarlo",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
		})
		.then((OK) => {
  		if (OK) {
			$.ajax({
			url:"/eliminar/"+id,
			success: function(res) {
            console.log(res);
        }
	});
    swal("Elimino el usuario", {
      icon: "success",
    }).then((ok) => {
	if (ok) {
		location.href="/listar";
	}
});
  } else {
    swal("El usuario no ha sido eliminado");
  }
});
}