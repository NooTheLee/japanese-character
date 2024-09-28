document.getElementById('addButton').addEventListener('click', () => {
    const container = document.getElementById('keyValueContainer');
    const newRow = document.createElement('div');
    newRow.classList.add('flex', 'space-x-2');
    
    newRow.innerHTML = `
        <input type="text" class="input-field" placeholder="e.g. CLIENT_KEY" />
        <input type="text" class="input-field" placeholder="Value" />
    `;
    
    container.appendChild(newRow);
});

document.getElementById('saveButton').addEventListener('click', () => {
    const keyValuePairs = [];
    const rows = document.querySelectorAll('#keyValueContainer > div');

    rows.forEach(row => {
        const key = row.querySelector('input[type="text"]').value;
        const pinyin = row.querySelector('input[type="text"]:nth-child(2)').value;
        const value = row.querySelector('input[type="text"]:nth-child(3)').value;
        if (key && value) {
            keyValuePairs.push({ character: key, romaji: value, pinyin });
        }
    });
    localStorage.setItem('keyValuePairs', JSON.stringify(keyValuePairs));
    window.location.href = 'index2.html';
});
