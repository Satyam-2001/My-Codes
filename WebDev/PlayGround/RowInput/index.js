const form = document.getElementById('append');
const table = document.getElementById('data');

const data = [];

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form);
    const val = [formData.get('name'), formData.get('age'), formData.get('gender')]
    data.push(val)
    const row = table.insertRow(table.rows.length - 1);
    for(let i = 0 ; i < val.length ; i++) {
        const cell = row.insertCell(i);
        cell.innerHTML = val[i];
    }
});