let alertaError = (error) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
      });
}