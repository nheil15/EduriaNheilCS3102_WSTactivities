const toggleButton = document.createElement('button');
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#444';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.display = 'flex';
toggleButton.style.alignItems = 'center';

const icon = document.createElement('i');
icon.classList.add('fas', 'fa-moon');
icon.style.marginRight = '10px';

toggleButton.prepend(icon); 

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
