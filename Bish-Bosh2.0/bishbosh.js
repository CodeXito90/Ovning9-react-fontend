
document.getElementById("generateBtn").addEventListener("click", function() 
{
    const bishValue = parseInt(document.getElementById("bishValue").value);
    const boshValue = parseInt(document.getElementById("boshValue").value);
    const loopEnd = parseInt(document.getElementById("loopEnd").value);
    const resultDiv = document.getElementById("result");

    // Rensa tidigare resultat
    resultDiv.innerHTML = "";

    // Kontrollera att inga negativa värden har angetts
    if (bishValue < 1 || boshValue < 1 || loopEnd < 1) {
        alert("Vänligen ange positiva värden.");
        return;
    }

    // Generera resultat
    for (let i = 1; i <= loopEnd; i++) {
        let resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        if (i % bishValue === 0 && i % boshValue === 0) {
            resultItem.innerText = "Bish-Bosh";
            resultItem.classList.add("bish-bosh");
        } else if (i % bishValue === 0) {
            resultItem.innerText = "Bish";
            resultItem.classList.add("bish");
        } else if (i % boshValue === 0) {
            resultItem.innerText = "Bosh";
            resultItem.classList.add("bosh");
        } else {
            resultItem.innerText = i;
        }

        // Lägg till resultatet i containern
        resultDiv.appendChild(resultItem);
        
    }
});
