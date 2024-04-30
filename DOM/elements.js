function enableEditing() {
    // Switch between view and edit modes
    document.getElementById('profileView').style.display = 'none';
    document.getElementById('profileEdit').style.display = 'block';

    // Populate editable fields with current values
    document.getElementById('nameEdit').value = document.getElementById('nameLabel').textContent;
    document.getElementById('emailEdit').value = document.getElementById('emailLabel').textContent;
}

function saveChanges() {
    // Save changes and switch back to view mode
    document.getElementById('nameLabel').textContent = document.getElementById('nameEdit').value;
    document.getElementById('emailLabel').textContent = document.getElementById('emailEdit').value;

    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
}

function cancelEditing() {
    // Cancel editing and switch back to view mode
    document.getElementById('profileView').style.display = 'block';
    document.getElementById('profileEdit').style.display = 'none';
}