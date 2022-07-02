var nameCar = "";
var modelCar = "";
var licensePlate = "";
var selectVaga;
var selectTime;

function getCar() {
  nameCar = document.getElementById("name").value;
  modelCar = document.getElementById("model-car").value;
  licensePlate = document.getElementById("license-plate").value;

  selectVaga = document.getElementById("selectVaga").value;
  selectTime = document.getElementById("selectTime").value;
  valida_campos();

  if (selectVaga == 1) {
    document.getElementById("box1").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 2) {
    document.getElementById("box2").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 3) {
    document.getElementById("box3").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 4) {
    document.getElementById("box4").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 5) {
    document.getElementById("box5").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 6) {
    document.getElementById("box6").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 7) {
    document.getElementById("box7").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 8) {
    document.getElementById("box8").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  } else if (selectVaga == 9) {
    document.getElementById("box9").innerHTML = (
      nameCar +
      "<br>" +
      modelCar +
      "<br>" +
      licensePlate +
      "<br>" +
      moment().format("H:mm:ss") +
      "<br> Período:" +
      selectTime
    ).fontsize(3.3);
    MsgAlert();
    valida_campos();
    limpaInput();
  }
  function MsgAlert() {
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: `A vaga ${selectVaga} foi reservada com sucesso!`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function valida_campos() {
    if (
      nameCar.length < 1 ||
      modelCar.length < 1 ||
      licensePlate.length < 6 ||
      selectVaga <= 0 ||
      selectTime <= 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos ou existem campos inválidos!",
      });
      document.getElementById("main").disabled = true;
    }
  }

  function limpaInput() {
    document.getElementById("name").value = "";
    document.getElementById("model-car").value = "";
    document.getElementById("license-plate").value = "";
    document.getElementById("selectVaga").value = 0;
    document.getElementById("selectTime").value = 0;
  }
}
function AbreVaga1() {
  Swal.fire({
    title: "Deseja liberar a vaga 1?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box1").innerHTML = "VAGA 1";

      Swal.fire("Vaga 1 livre!", "", "success");
    }
  });
}
function AbreVaga2() {
  Swal.fire({
    title: "Deseja liberar a vaga 2?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box2").innerHTML = "VAGA 2";

      Swal.fire("Vaga 2 livre!", "", "success");
    }
  });
}
function AbreVaga3() {
  Swal.fire({
    title: "Deseja liberar a vaga 3?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box3").innerHTML = "VAGA 3";

      Swal.fire("Vaga 3 livre!", "", "success");
    }
  });
}
function AbreVaga4() {
  Swal.fire({
    title: "Deseja liberar a vaga 4?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box4").innerHTML = "VAGA 4";

      Swal.fire("Vaga 4 livre!", "", "success");
    }
  });
}
function AbreVaga5() {
  Swal.fire({
    title: "Deseja liberar a vaga 5?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box5").innerHTML = "VAGA 5";

      Swal.fire("Vaga 5 livre!", "", "success");
    }
  });
}
function AbreVaga6() {
  Swal.fire({
    title: "Deseja liberar a vaga 6?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box6").innerHTML = "VAGA 6";

      Swal.fire("Vaga 6 livre!", "", "success");
    }
  });
}
function AbreVaga7() {
  Swal.fire({
    title: "Deseja liberar a vaga 7?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box7").innerHTML = "VAGA 7";

      Swal.fire("Vaga 7 livre!", "", "success");
    }
  });
}
function AbreVaga8() {
  Swal.fire({
    title: "Deseja liberar a vaga 8?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box8").innerHTML = "VAGA 8";

      Swal.fire("Vaga 8 livre!", "", "success");
    }
  });
}
function AbreVaga9() {
  Swal.fire({
    title: "Deseja liberar a vaga 9?",
    text: "Não poderá reverter essa ação!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("box9").innerHTML = "VAGA 9";

      Swal.fire("Vaga 9 livre!", "", "success");
    }
  });
}
