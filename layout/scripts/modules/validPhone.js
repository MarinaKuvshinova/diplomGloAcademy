const validPhone = () => {
    const inputPhone = document.getElementsByName('phone');

    inputPhone.forEach(input => {
        input.setAttribute('maxlength', 10);
        input.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 16);
            e.target.value = e.target.value.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/,"+7($1)$2-$3-$4");

        });

        input.addEventListener('keydown', e => {
            if (e.keyCode === 8) {
                e.preventDefault();
                e.target.value = e.target.value.slice(0, -1);
            }
        });

    });
};

export default validPhone;