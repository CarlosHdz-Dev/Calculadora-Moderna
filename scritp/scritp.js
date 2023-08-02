// Función para cambiar el tema
function toggleTheme() {
    let body = document.body;
    body.classList.toggle('dark-theme');

    let logo = document.getElementById('labelToggle');
    if (body.classList.contains('dark-theme')) {
    logo.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    logo.innerHTML = '<i class="fa-solid fa-moon"></i>'
  }
    }
  
  // Verificar si los elementos existen antes de agregar el event listener
  let toggle = document.getElementById('toggle');
  let labelToggle = document.getElementById('labelToggle');
  
  if (toggle && labelToggle) {
    toggle.addEventListener('change', toggleTheme);
  }
  



//Funciones Calculadora
  function clearDisplay() {
    document.getElementById("result").value = "";

  }
  
  function appendToDisplay(value) {
    document.getElementById("result").value += value;
  }
  
  function isValidExpression(expression) {
    const pattern = /[\+\-\*\/]{2,}/;
    return !pattern.test(expression);
  }
  

  function calculate() {
    const result = document.getElementById("result");
    let expression = result.value.trim(); // Eliminar espacios al inicio y al final de la expresión
  
    if (expression === "") {
      // Si la expresión está vacía, mostrar un mensaje en la pantalla
      result.value = "Digite una opción válida";
      return;
    }
  
    if (!isValidExpression(expression)) {
      result.value = "Expresión Inválida";
      return clearDisplay();
    }
  
    try {
      result.value = eval(expression);
    } catch (error) {
      result.value = "Error";
      return clearDisplay();
    }
  }

//Eliminar el ultimo caracter
  function backspace() {
    const result = document.getElementById("result");
    let expression = result.value;
  
    if (expression.length > 0) {
      // Eliminar el último carácter de la expresión
      expression = expression.slice(0, -1);
      result.value = expression;
    }
  }
  
