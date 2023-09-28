function getInputData() {
    // Mengambil nilai dari input form menggunakan getElementById
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;

    // Mengembalikan objek yang berisi data dari input form
    return {
        weight: weightInput,
        height: heightInput
    };
}

function calculateBMI(weightData, heightData){
    // toFixed untuk mengubah angka desimal menjadi hanya satu angka di belakang koma
    // Number() untuk mengubah string jadi angka karena method toFixed mengembalikan string
    return Number((weightData/(heightData/100) ** 2).toFixed(1));
}

function checkBMICategory(BMI){
    if(BMI < 18.5){
        return `Your BMI is <b>${BMI}</b> which means you are <b>Underweight</b>`;
    }else if(BMI >= 18.5 && BMI < 25){
        return `Your BMI is <b>${BMI}</b> which means you are <b>Normal</b>`;
    }else if(BMI >= 25 && BMI < 30){
        return `Your BMI is <b>${BMI}</b> which means you are <b>Overweight</b>`;
    }else if(BMI >= 30){
        return `Your BMI is <b>${BMI}</b> which means you are <b>Obesity</b>`;
    }
}

function submit(event) {
    event.preventDefault();
    let dataInput = getInputData();
    const resultParagraph = document.getElementById('result');

    if(dataInput.weight == "" || dataInput.height == ""){
        resultParagraph.innerText = "Please enter the data correctly"
    }else {
        let resultBMI = calculateBMI(dataInput.weight, dataInput.height);
        resultParagraph.innerHTML = checkBMICategory(resultBMI); // Tampilkan paragraf hasil
    }
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click", submit);