export const maxlength = () => {
    $('.form-group > input[maxlength]').maxlength({
        warningClass: 'small text-muted',
        limitReachedClass: 'small text-danger',
        placement: {
            bottom: '10px',
            right: '12px',
        },
        appendToParent: true,
        separator: '/',
        showOnReady: true,
    });

    $('.form-input-wrapper > input[maxlength]').maxlength({
        warningClass: 'small text-muted',
        limitReachedClass: 'small text-danger',
        placement: {
            bottom: '10px',
            right: '40px',
        },
        appendToParent: true,
        separator: '/',
        showOnReady: true,
    });

    $('textarea[maxlength]').maxlength({
        warningClass: 'small text-muted',
        limitReachedClass: 'small text-danger',
        placement: {
            bottom: '10px',
            right: '12px',
        },
        appendToParent: true,
        separator: '/',
        showOnReady: true,
    });
}