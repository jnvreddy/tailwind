

const navLinks= document.querySelector('.nav-links')
    function onToggleMenu(e){
        e.name = e.name === 'menu-outline' ? 'close-outline' : 'menu-outline'
        navLinks.classList.toggle('top-[-3%]')
    }
    function toggleDropdown() {
        const dropdownMenu = document.getElementById("dropdownMenu");
        dropdownMenu.classList.toggle("hidden");
    }

    // Optional: Close the dropdown if clicked outside
    window.onclick = function(event) {
        if (!event.target.matches('#dropdownButton')) {
            const dropdowns = document.getElementsByClassName("hidden");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (!openDropdown.classList.contains('hidden')) {
                    openDropdown.classList.add('hidden');
                }
            }
        }
    };

