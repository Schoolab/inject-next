export const nestedDropdown = () => {
    var dropdownNested = document.querySelectorAll('.dropdown-nested');

    dropdownNested.forEach(function(nested) {
        var popperInstance = null;

        nested.addEventListener('mouseover', function(e) {
            e.preventDefault();

            var dropdownItem = nested.querySelector('.dropdown-item');
            var dropdownMenu = nested.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
                dropdownItem.classList.add('hover');
                dropdownItem.setAttribute('data-extended', 'true');

                e.stopPropagation();

                if (popperInstance) {
                    popperInstance.destroy();
                }

                var rect = nested.getBoundingClientRect();
                var menuRect = dropdownMenu.getBoundingClientRect();
                var windowWidth = window.innerWidth;

                var placement = 'bottom';
                var parent = nested.parentElement;

                if (parent.classList.contains('dropright') && rect.left + menuRect.width > windowWidth) {
                    placement = 'left-start';
                } else if (parent.classList.contains('dropleft') && rect.left - menuRect.width < 0) {
                    placement = 'right-start';
                } else if (rect.left + menuRect.width > windowWidth) {
                    placement = 'left-start';
                } else if (rect.left - menuRect.width < 0) {
                    placement = 'right-start';
                } else if (parent.classList.contains('dropright')) {
                    placement = 'right-start';
                } else if (parent.classList.contains('dropleft')) {
                    placement = 'left-start';
                }

                popperInstance = new Popper(nested, dropdownMenu, {
                    placement: placement,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 0],
                            },
                        },
                    ],
                });
            }
        });

        nested.addEventListener('mouseout', function(e) {
            var dropdownItem = nested.querySelector('.dropdown-item');
            var dropdownMenu = nested.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
                dropdownItem.classList.remove('hover');
                dropdownItem.removeAttribute('data-extended');

                if (popperInstance) {
                    popperInstance.destroy();
                    popperInstance = null;
                }
            }
        });

        nested.closest('.dropdown').addEventListener('hide.bs.dropdown', function () {
            var nestedDropdowns = this.querySelectorAll('> .dropdown-menu .dropdown-menu.show');
            nestedDropdowns.forEach(function(menu) {
                menu.classList.remove('show');
                var dropdownItem = menu.closest('.dropdown-nested').querySelector('.dropdown-item');
                dropdownItem.classList.remove('hover');
                dropdownItem.removeAttribute('data-extended');
            });
        });
    });
};