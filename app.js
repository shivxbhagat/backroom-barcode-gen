const generateBarcode = () => {
  let text = document.getElementById("text").value;

  if (text.trim().length === 0) {
    alert("Please enter a valid backroom bin number.");
    return;
  }

  let numbers = text.split("/"); 


  let convertedText = "A"+numbers[0]+ "R" + numbers[1] + "S" + numbers[2] + "00100";
  console.log(convertedText);
  JsBarcode("#barcode", convertedText, {
    format: "CODE128",
    lineColor: "#000",
    width: 2,
    height: 100,
    displayValue: true,
    text: text,
  });
};


document.getElementById("btn").addEventListener("click", generateBarcode);





