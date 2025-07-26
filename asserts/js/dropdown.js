 document.querySelectorAll('.menu-item > a').forEach(link => {
            link.addEventListener('click', function (e) {
                const parent = this.parentElement;
                const dropdown = parent.querySelector('.dropdown-menu');

                if (dropdown) {
                    e.preventDefault();

                    // Hide all other dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        if (menu !== dropdown) {
                            menu.classList.remove('show');
                        }
                    });

                    // Toggle current one
                    dropdown.classList.toggle('show');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.menu-item')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
